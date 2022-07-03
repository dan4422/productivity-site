import 'react-big-calendar/lib/css/react-big-calendar.css'
import styles from './Calendar.module.css'
import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useCallback } from 'react'

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
  const tasks = useSelector(state => state.todo.tasks)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
  };

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
    
  )


  const MyCalendar = props => (
    <div className='height600'>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        className={styles.homeCalendar}
        events={tasks}
        onSelectEvent={handleShow}
        popup
      />
    </div>
  )

  return (
    <>
      <div className='d-flex justify-content-center mb-3'>
        <MyCalendar />
      </div>
      {/* Modal shows up with only the first result. might have to add an id to each event
      and then find it and then make the modal pop up */}
      {tasks.map((task,i) => {
        return (
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{task.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Start Time: {task.start.toLocaleTimeString('en-US')}
            <br />
            End Time: {task.end.toLocaleTimeString('en-US')}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Mark as Complete
            </Button>
          </Modal.Footer>
        </Modal>
        )
      })}
    </>
  )
}

export default MainCalendar