import 'react-big-calendar/lib/css/react-big-calendar.css'
import styles from './Calendar.module.css'
import React from 'react'
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import { toggleTask, deleteTask } from '../redux/todo/actions'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function MainCalendar() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todo.tasks)
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null)

  const handleClose = () => {
    setShow(false)
    setSelectedTask(null)
  };

  const handleShow = (task) => {
    setSelectedTask(task)
    setShow(true)
  };

  const deleteBtn = (task) => {
    dispatch(deleteTask(task))
    handleClose()
  }

  const markComplete = (task) => {
    dispatch(toggleTask(task))
    handleClose()
  }

  const eventPropGetter = (event) => {
    if (event.complete) {
      return {
        style: {
          backgroundColor: '#09A129',
          textDecoration: 'line-through'
        }
      }
    }
    if (event.color) {
      return {
        style: {
          backgroundColor: event.color,
        }
      }
    } 
  }

  

  const views = Object.keys(Views).map((k)=> Views[k])
  const MyCalendar = props => (
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        className={styles.todoCalendar}
        events={tasks}
        eventPropGetter={eventPropGetter}
        onSelectEvent={(props) => handleShow(props)}
        views={views}
        defaultView={Views.MONTH}
        step={15}
        showMultiDayTimes
      />
  )

  return (
    <>
      <div className='d-flex justify-content-center mb-2'>
        <MyCalendar/>
      </div>
      {selectedTask &&
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTask.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Start: {new Date(selectedTask.start).toLocaleDateString('en-US')} {selectedTask.allDay ? '': new Date(selectedTask.start).toLocaleTimeString('en-US')}
            <br />
            End: {new Date(selectedTask.end).toLocaleDateString('en-US')} {selectedTask.allDay ? '': new Date(selectedTask.end).toLocaleTimeString('en-US')}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={() => deleteBtn(selectedTask)}>
              Delete
            </Button>
            {selectedTask.complete ? <Button variant="warning" onClick={() => markComplete(selectedTask)}>
              Incomplete
            </Button> : <Button variant="success" onClick={() => markComplete(selectedTask)}>
              Completed
            </Button>}
          </Modal.Footer>
        </Modal> }
    </>
  )
}

export default MainCalendar