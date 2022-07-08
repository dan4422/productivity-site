import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask } from '../redux/todo/actions'
import styles from './List.module.css'


function ListItem(props) {
  const { title, start, end, allDay, complete, color } = props.data
  const dispatch = useDispatch()

  const deleteBtn = (task) => {
    dispatch(deleteTask(task))
  }

  const markComplete = (task) => {
    dispatch(toggleTask(task))
  }

  const matchColor = (color) => {
    switch (color) {
      case '#90141E':
        return 'Red'
      case '#EFAAC4':
        return 'Pink'
      case '#772D8B':
        return 'Purple'
      case '#E55812':
        return 'Orange'
      case '#FFC100':
        return 'Yellow'
      case '#B88B4A':
        return 'Brown'
      default:
        return 'Blue'
    }
  }

  const textColor = (color) => {
    switch (color) {
      case '#90141E':
        return 'white'
      case '#EFAAC4':
        return ''
      case '#772D8B':
        return 'white'
      case '#E55812':
        return ''
      case '#FFC100':
        return ''
      case '#B88B4A':
        return ''
      default:
        return 'white'
    }
  }

  return (
    <tr>
      <td	style={{backgroundColor:`${complete ? '#09A129': ''}`}}>{complete ? 'Completed':'Not Yet'}</td>
      <td	style={{backgroundColor:`${color === '' ? 'rgb(49,116,173)':color}`, color: `${textColor(color)}`}}>{matchColor(color)}</td>
      <td className={styles.titleData} style={{textDecoration:`${complete ? 'line-through':''}`}}>{title}</td>
      <td>{new Date(start).toLocaleDateString('en-US')} {allDay ? '' : new Date(start).toLocaleTimeString('en-US').split(':00').join('')}</td>
      <td>{new Date(end).toLocaleDateString('en-US')} {allDay ? '' : new Date(end).toLocaleTimeString('en-US').split(':00').join('')}</td>
      <td>{allDay ? 'All Day' : 'No'}</td>
      <td><Button className="me-1" onClick={() => deleteBtn(props.data)} variant="danger">X</Button> 
      {complete ? <Button variant="warning" onClick={() => markComplete(props.data)}>&#9100;</Button> 
      : <Button onClick={() => markComplete(props.data)} variant="success">√</Button>}</td>
    </tr>
  )
}

export default ListItem