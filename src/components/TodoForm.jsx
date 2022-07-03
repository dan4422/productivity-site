import React, { useState } from 'react'
import { Button, Form, FloatingLabel, InputGroup, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/todo/actions'
import { useSelector } from 'react-redux'
import styles from './TodoForm.module.css'

function TodoForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [start, setDateStart] = useState('')
  const [end, setDateEnd] = useState('')
  const [allDay, setAllDay] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title,
      start: new Date(start),
      end: new Date(end),
      allDay
    }
    dispatch(addToDo(newTask))
    console.log(newTask)
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
            <FloatingLabel label="Add in a Task" className='flex-grow-1'>
              <Form.Control size="lg" type="text"
                placeholder='Add in a task' value={title} onChange={(e) => setTitle(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel label="Pick a start date">
              <Form.Control type="datetime-local" placeholder='Pick a start date' value={start} onChange={(e) => setDateStart(e.target.value)} />
            </FloatingLabel>            
            <FloatingLabel label="Pick a end date">
              <Form.Control type="datetime-local" placeholder='Pick a end date' value={end} onChange={(e) => setDateEnd(e.target.value)} />
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