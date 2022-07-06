import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, deleteTask } from '../redux/todo/actions'
import { useState } from 'react'


function ListItem(props) {
  const {id,title, start, end, allDay, complete} = props.data
  const findTasks = useSelector(state => state.todo.tasks)
  const selectedTask = findTasks.find(task => task.id === id)
  const [showComplete, setShowComplete] = useState(selectedTask.complete)
  const dispatch = useDispatch()

  const deleteBtn = (task) => {
    dispatch(deleteTask(task))
  }

  const markComplete = (task) => {
    dispatch(completeTask(task))
    setShowComplete(selectedTask.complete)
    // buttons dont update with the redux objects of complete. Might have something to do with the sort and index of each item
  }

  return (
    <tr>
    <td>{title}</td>
    <td>{new Date(start).toLocaleDateString('en-US')} {allDay ? '': new Date(start).toLocaleTimeString('en-US')}</td>
    <td>{new Date(end).toLocaleDateString('en-US')} {allDay ? '': new Date(end).toLocaleTimeString('en-US')}</td>
    <td>{allDay ? 'All Day': 'no'}</td>
    <td><Button onClick={() => deleteBtn(props.data)} variant="danger">X</Button> {complete ? <Button variant="warning" onClick={() => markComplete(props.data)}>
      Mark incomplete</Button> : <Button onClick={() => markComplete(props.data)} variant="success">√</Button>}</td>
  </tr>
  )
}

export default ListItem