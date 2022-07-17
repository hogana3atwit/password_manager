const { MongoClient, Binary } = require("mongodb");

// start-key-vault
const eDB = "encryption";
const eKV = "__keyVault";
const keyVaultNamespace = `${eDB}.${eKV}`;
// end-key-vault

// start-kmsproviders
const fs = require("fs");
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

async function run() {
  // start-schema
  const uri = "mongodb+srv://burchy99:%2AJL0hn36%23%2AgC@passmanager.lkwxg.mongodb.net";
  const unencryptedClient = new MongoClient(uri);
  await unencryptedClient.connect();
  const keyVaultClient = unencryptedClient.db(eDB).collection(eKV);

  const dek1 = await keyVaultClient.findOne({ keyAltNames: "dataKey1" });
  //const dek2 = await keyVaultClient.findOne({ keyAltNames: "dataKey2" });
  //const dek3 = await keyVaultClient.findOne({ keyAltNames: "dataKey3" });
  //const dek4 = await keyVaultClient.findOne({ keyAltNames: "dataKey4" });

  const secretDB = "PassManager";
  const secretCollection = "UserInformation";

  const encryptedFieldsMap = {
    [`${secretDB}.${secretCollection}`]: {
      fields: [
        {
          keyId: dek1._id,
          path: "password",
          bsonType: "string",
          queries: { queryType: "equality" },
        },
        //{
          //keyId: dek2._id,
          //path: "medications",
          //bsonType: "array",
        //},
        //{
          //keyId: dek3._id,
          //path: "patientRecord.ssn",
          //bsonType: "string",
          //queries: { queryType: "equality" },
        //},
        //{
          //keyId: dek4._id,
          //path: "patientRecord.billing",
          //bsonType: "object",
        //},
      ],
    },
  };
  // end-schema

  // start-extra-options
  //const extraOptions = {
    //cryptSharedLibPath: "<path to FLE Shared Library>",
  //};
  // end-extra-options

  // start-client
  const encryptedClient = new MongoClient(uri, {
    autoEncryption: {
      keyVaultNamespace: keyVaultNamespace,
      kmsProviders: kmsProviders,
      encryptedFieldsMap: encryptedFieldsMap,
    },
  });
  await encryptedClient.connect();
  // end-client
  try {
    const unencryptedColl = unencryptedClient
      .db(secretDB)
      .collection(secretCollection);

    // start-insert
    const encryptedColl = encryptedClient
      .db(secretDB)
      .collection(secretCollection);
    await encryptedColl.insertOne({
      username: "testencryption",
      email: "testencryption@gmail.com",
      password: "testenc1234",
    });
    // end-insert
    // start-find
    console.log("Finding a document with regular (non-encrypted) client.");
    console.log(await unencryptedColl.findOne({ username: /testencryption/ }));
    console.log(
      "Finding a document with encrypted client, searching on an encrypted field"
    );
    console.log(
      await encryptedColl.findOne({ "password": "testenc1234" })
    );
    // end-find
  } finally {
    await unencryptedClient.close();
    await encryptedClient.close();
  }
}

run().catch(console.dir);
