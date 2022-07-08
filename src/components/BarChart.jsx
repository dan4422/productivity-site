import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Chart as ChartJS} from 'chart.js/auto'
import styles from '../routes/Progress.module.css'


function BarChart(props) {
  const tasks = useSelector(state => state.todo.tasks)
  const [data, setData] = useState({
    labels: ['Completed Tasks','Number of Tasks'],
    datasets: [{
      label: "Tasks Completed",
      data: [tasks.filter((task) => task.complete === true).length, tasks.length],
      backgroundColor: [
      '#3DA35D',
      '#2a71d0',
      ],
      borderColor: 'black',
      borderWidth: 2,
    }],
  })

  return (
    <Bar data={data} className={styles.bgChart} />
  )
}

export default BarChart