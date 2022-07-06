import React from 'react'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Chart as ChartJS} from 'chart.js/auto'
import styles from '../routes/Progress.module.css'


function LineChart() {
  const tasks = useSelector(state => state.todo.tasks)
  const monthData = {}
  for (let i=0; i < tasks.length; i++) {
    const month = new Date(tasks[i].start).getMonth()+1
    if (!(month in monthData)) {
      monthData[month] = 0
    }
    if (month in monthData) {
      monthData[month] += 1
    }
  }
  const [data, setData] = useState({
    datasets: [{
      label: "Number of Tasks by Month",
      data: monthData,
      backgroundColor: [
      'rgb(0,78,152)',
      ],
      borderColor: 'black',
      borderWidth: 1,
    }],
  })

  return (
    <Line data={data}  className={styles.bgColor}/>
  )
}

export default LineChart