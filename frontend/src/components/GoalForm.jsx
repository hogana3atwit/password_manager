import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const [formData, setFormData] = useState({
    website: '',
    username: '',
    password: '',
  })

  const {website,username,password} = formData

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Account</label>
          <input
            type='website'
            name='website'
            id='website'
            value={website}
            onChange={onChange}
          />

<input
            type='username'
            name='username'
            id='username'
            value={username}
            onChange={onChange}
          />
<input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Account
          </button>
        </div>
      </form>

    </section>
  )
}

export default GoalForm