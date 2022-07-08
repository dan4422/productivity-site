import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {Chart as ChartJS} from 'chart.js/auto'
import styles from '../routes/Progress.module.css'



function ColorLabelPieChart(props) {
  const tasks = useSelector(state => state.todo.tasks)
  const [data, setData] = useState({
    labels: ['Blue',
      'Red',
      'Pink',
      'Purple',
      'Orange',
      'Yellow',
      'Brown'],
    datasets: [{
      label: "Tasks Completed",
      data: [
        tasks.filter((task) => task.color === '').length, 
        tasks.filter((task) => task.color === '#90141E').length,
        tasks.filter((task) => task.color === '#EFAAC4').length,
        tasks.filter((task) => task.color === '#772D8B').length,
        tasks.filter((task) => task.color === '#E55812').length,
        tasks.filter((task) => task.color === '#FFC100').length,
        tasks.filter((task) => task.color === '#B88B4A').length,
      ],
      backgroundColor: [
      'rgb(49,116,173)',
      '#90141E',
      '#EFAAC4',
      '#772D8B',
      '#E55812',
      '#FFC100',
      '#B88B4A',
      ],
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    }],
    options: {
      responsive:false,
      maintainAspectRatio: false,
    }
  })

  return (
    <Pie data={data}  className={styles.bgChart}/>
  )
}

export default ColorLabelPieChart