import React, { useState } from 'react'
import { Button, Form, FloatingLabel, InputGroup, Container, Row, Col } from 'react-bootstrap'
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
        <Row>
          <Form onSubmit={handleSubmit} className="mx-auto">
            <Col>
              <Row>
                <InputGroup size="lg" className='d-flex justify-content-center'>
                  <Col xs={12} md={2} lg={2}>
                    <FloatingLabel label="color">
                      <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
                        <option disabled>Choose Color</option>
                        <option value="">Blue</option>
                        <option value="#90141E">Red</option>
                        <option value="#EFAAC4">Pink</option>
                        <option value="#772D8B">Purple</option>
                        <option value="#E55812">Orange</option>
                        <option value="#FFC100">Yellow</option>
                        <option value="#B88B4A">Brown</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={3} lg={5}>
                    <FloatingLabel label="Add in a Task">
                      <Form.Control size="lg" type="text"
                        placeholder='Add in a task' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </FloatingLabel>
                  </Col>
                  <Col xs={6} md={3} lg={2}>
                    <FloatingLabel label="Pick a start date">
                      {allDay ? <Form.Control type="date" placeholder='Pick a start date' value={start} onChange={(e) => setDateStart(e.target.value)} required /> : <Form.Control type="datetime-local" placeholder='Pick a start date' value={start} onChange={(e) => setDateStart(e.target.value)} required />}
                    </FloatingLabel>
                  </Col>
                  <Col xs={6} md={3} lg={2}>
                    <FloatingLabel label="Pick a end date">
                      {allDay ? <Form.Control type="date" placeholder='Pick a end date' value={end} onChange={(e) => setDateEnd(e.target.value)} required /> : <Form.Control type="datetime-local" placeholder='Pick a end date' value={end} onChange={(e) => setDateEnd(e.target.value)} required />}
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} md={1} lg={1}>
                    <div className={styles.switchbox}>
                      <p>All Day?</p>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className={styles.switch}
                        value={allDay}
                        checked={allDay}
                        onChange={(e) => setAllDay(!allDay)}
                      />
                    </div>
                  </Col>
                </InputGroup>
              </Row>
            </Col>
            <Col xs={12} className="text-center mt-2">
              <Button type="submit" className={`${styles.formBtn} bg-success btn-outline-success text-white btn-lg`}>Submit</Button>
            </Col>
          </Form>
        </Row>
      </Container>

    </>
  )
}

export default TodoForm