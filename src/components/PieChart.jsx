import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Chart as ChartJS} from 'chart.js/auto'
import styles from '../routes/Progress.module.css'


function PieChart(props) {
  const tasks = useSelector(state => state.todo.tasks)
  const [data, setData] = useState({
    labels: ['Completed Tasks','Number of Tasks'],
    datasets: [{
      label: "Tasks Completed",
      data: [tasks.filter((task) => task.complete === true).length, tasks.length - tasks.filter((task) => task.complete === true).length],
      backgroundColor: [
      '#3DA35D',
      '#2a71d0',
      ],
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    }],
  })
  

  return (
    <Pie data={data} className={styles.bgChart}/>
  )
}

export default PieChart