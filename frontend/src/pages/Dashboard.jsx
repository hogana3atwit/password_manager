import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import { getGoals, reset } from '../features/goals/goalSlice'
import './css/dashboardPageCSS.css'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {

    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  return (
    <>
    <div className='dbContainer'>
      <div className='dbNAVBAR'>
      <ul id='dbNAVBAR'>
        <li> VIEW ACCOUNTS </li>
        <li> GENERATE PASSWORDS </li>
        <li> EXPORT/IMPORT </li>
      </ul>
      </div>

      <div className='dbPMSection'>
      <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
      </div>
      </div>

    </>
  )
}

export default Dashboard
