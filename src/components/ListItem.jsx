import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask } from '../redux/todo/actions'


function ListItem(props) {
  const { title, start, end, allDay, complete } = props.data
  const dispatch = useDispatch()

  const deleteBtn = (task) => {
    dispatch(deleteTask(task))
  }

  const markComplete = (task) => {
    dispatch(toggleTask(task))
  }

  return (
    <tr>
      <td>{complete ? 'Completed':'Not Yet'}</td>
      <td>{title}</td>
      <td>{new Date(start).toLocaleDateString('en-US')} {allDay ? '' : new Date(start).toLocaleTimeString('en-US')}</td>
      <td>{new Date(end).toLocaleDateString('en-US')} {allDay ? '' : new Date(end).toLocaleTimeString('en-US')}</td>
      <td>{allDay ? 'All Day' : 'no'}</td>
      <td><Button className="me-1" onClick={() => deleteBtn(props.data)} variant="danger">X</Button> 
      {complete ? <Button variant="warning" onClick={() => markComplete(props.data)}>&#9100;</Button> 
      : <Button onClick={() => markComplete(props.data)} variant="success">√</Button>}</td>
    </tr>
  )
}

export default ListItem