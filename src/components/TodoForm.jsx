import React, { useState } from 'react'
import { Button, Form, FloatingLabel, InputGroup, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/todo/actions'
import { useSelector } from 'react-redux'
import styles from './TodoForm.module.css'

function TodoForm() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todo.tasks)
  const [title, setTitle] = useState('')
  const [start, setDateStart] = useState('')
  const [end, setDateEnd] = useState('')
  const [allDay, setAllDay] = useState(false)
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const startDateTime = new Date(start).toUTCString().substring(0, 16)
    const endDateTime = new Date(end).toUTCString().substring(0, 16) + ' 06:00:00 GMT'
    let nextId = 0
    for (let task of tasks) {
      if (task.id >= nextId) {
        nextId = task.id + 1
      }
    }
    const newTask = {
      id: nextId,
      title,
      start: allDay ? new Date(startDateTime) : new Date(start),
      end: allDay ? new Date(endDateTime) : new Date(end),
      allDay,
      complete: false,
      color
    }
    dispatch(addTask(newTask))
    setTitle('')
    setDateStart('')
    setDateEnd('')
    setAllDay(false)
  }

  return (
    <>
      <Container fluid className='mt-5'>
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ width: '80vw' }}>
          <InputGroup size="lg">
          <FloatingLabel label="Pick a color">
            <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
              <option selected disabled>Choose Color</option>
              <option value="#3993DD">Blue</option>
              <option value="#90141E">Red</option>
              <option value="#EFAAC4">Pink</option>
              <option value="#772D8B">Purple</option>
              <option value="#E55812">Orange</option>
              <option value="#FFC100">Yellow</option>
              <option value="#B88B4A">Brown</option>
            </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Add in a Task" className='flex-grow-1'>
              <Form.Control size="lg" type="text"
                placeholder='Add in a task' value={title} onChange={(e) => setTitle(e.target.value)} required />
            </FloatingLabel>
            <FloatingLabel label="Pick a start date">
              {allDay ? <Form.Control type="date" placeholder='Pick a start date' value={start} onChange={(e) => setDateStart(e.target.value)} required /> : <Form.Control type="datetime-local" placeholder='Pick a start date' value={start} onChange={(e) => setDateStart(e.target.value)} required />}
            </FloatingLabel>
            <FloatingLabel label="Pick a end date">
              {allDay ? <Form.Control type="date" placeholder='Pick a end date' value={end} onChange={(e) => setDateEnd(e.target.value)} required /> : <Form.Control type="datetime-local" placeholder='Pick a end date' value={end} onChange={(e) => setDateEnd(e.target.value)} required />}
            </FloatingLabel>
            <div className={styles.switchbox}>
              <p>All Day Event?</p>
              <Form.Check
                type="switch"
                id="custom-switch"
                className={styles.switch}
                value={allDay}
                checked={allDay}
                onChange={(e) => setAllDay(!allDay)}
              />
            </div>
            <Button type="submit" className='bg-success btn-outline-success text-white btn-lg'>Submit</Button>
          </InputGroup>
        </Form>
      </Container>

    </>
  )
}

export default TodoForm