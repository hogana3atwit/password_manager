const { MongoClient, Binary } = require("mongodb");
const { ClientEncryption } = require("mongodb-client-encryption");

const keyVaultDatabase = "encryption";
const keyVaultCollection = "__keyVault";
const keyVaultNamespace = `${keyVaultDatabase}.${keyVaultCollection}`;
const secretDB = "PassManager";
const secretCollection = "UserInformation";

const fs = require("fs");
const crypto = require("crypto");
try {
  fs.writeFileSync("master-key.txt", crypto.randomBytes(96));
} catch (err) {
  console.error(err);
}

// start-kmsproviders
const provider = "local";
const path = "./master-key.txt";
// WARNING: Do not use a local key file in a production application
const localMasterKey = fs.readFileSync(path);
const kmsProviders = {
  local: {
    key: localMasterKey,
  },
};
// end-kmsproviders

// start-datakeyopts
// end-datakeyopts

async function run() {
  // start-create-index
  const uri = "mongodb+srv://burchy99:%2AJL0hn36%23%2AgC@passmanager.lkwxg.mongodb.net";
  const keyVaultClient = new MongoClient(uri);
  await keyVaultClient.connect();
  const keyVaultDB = keyVaultClient.db(keyVaultDatabase);

  //await keyVaultDB.dropDatabase();
  const keyVaultColl = keyVaultDB.collection(keyVaultCollection);
  await keyVaultColl.createIndex(
    { keyAltNames: 1 },
    {
      unique: true,
      partialFilterExpression: { keyAltNames: { $exists: true } },
    }
  );
  // end-create-index
  // start-create-dek
  const clientEnc = new ClientEncryption(keyVaultClient, {
    keyVaultNamespace: keyVaultNamespace,
    kmsProviders: kmsProviders,
  });
  const dek1 = await clientEnc.createDataKey(provider, {
    keyAltNames: ["dataKey1"],
  });
  //const dek2 = await clientEnc.createDataKey(provider, {
    //keyAltNames: ["dataKey2"],
  //});
  //const dek3 = await clientEnc.createDataKey(provider, {
    //keyAltNames: ["dataKey3"],
  //});
  //const dek4 = await clientEnc.createDataKey(provider, {
    //keyAltNames: ["dataKey4"],
  //});
  // end-create-dek

  // start-create-enc-collection
  const encryptedFieldsMap = {
    [`${secretDB}.${secretCollection}`]: {
      fields: [
        {
          keyId: dek1,
          path: "password",
          bsonType: "string",
          queries: { queryType: "equality" },
        },
        //{
          //keyId: dek2,
          //path: "medications",
          //bsonType: "array",
        //},
        //{
          //keyId: dek3,
          //path: "patientRecord.ssn",
          //bsonType: "string",
          //queries: { queryType: "equality" },
        //},
        //{
          //keyId: dek4,
          //path: "patientRecord.billing",
          //bsonType: "object",
        //},
      ],
    },
  };
  //const extraOptions = {
    //cryptSharedLibPath: "<path to FLE Shared Library>",
  //};
  const encClient = new MongoClient(uri, {
    autoEncryption: {
      keyVaultNamespace,
      kmsProviders,
      encryptedFieldsMap,
    },
  });
  await encClient.connect();
  const newEncDB = encClient.db(secretDB);
  await newEncDB.dropDatabase();
  await newEncDB.createCollection(secretCollection);
  console.log("Created encrypted collection!");
  // end-create-enc-collection
  await keyVaultClient.close();
  await encClient.close();
}

run().catch(console.dir);
