import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BarChart from '../components/BarChart'

function Progress() {
  const tasks = useSelector(state => state.todo.tasks)
  const [data, setData] = useState({
    labels: ['completed','incomplete'],
    datasets: [{
      label: "tasks completed",
      data: [tasks.filter((task) => task.complete === true).length, tasks.length]
    }]
  })
  console.log(data)
  return (
    <div style={{width:'500px'}}>
      <BarChart chartData={data}/>
    </div>
  )
}

export default Progress