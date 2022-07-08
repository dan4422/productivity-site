import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Chart as ChartJS} from 'chart.js/auto'
import styles from '../routes/Progress.module.css'


function CompletedBarChart() {
  const tasks = useSelector(state => state.todo.tasks)
  const monthData = {}
  for (let i=0; i < tasks.length; i++) {
    const month = new Date(tasks[i].start).getMonth()+1
    if (!(month in monthData)) {
      monthData[month] = 0
    }
    if (month in monthData && tasks[i].complete === true) {
      monthData[month] += 1
    }
  }
  const [data, setData] = useState({
    datasets: [{
      label: "Completed Tasks by Month",
      data: monthData,
      backgroundColor: [
      '#3DA35D',
      ],
      borderColor: 'black',
      borderWidth: 2,
    }],
  })

  return (
    <Bar data={data} className={styles.bgChart} />
  )
}

export default CompletedBarChart