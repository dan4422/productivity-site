import React, { useState } from 'react'
import TodoForm from '../components/TodoForm'
import MainCalendar from '../components/MainCalendar'
import List from '../components/List'
import { Button, Col } from 'react-bootstrap'
import styles from './Todo.module.css'


function Todo() {
  const [changeView, setChangeView] = useState(true)

  return (
    <>
      <TodoForm />
      <div className={styles.viewBtn}>
        {changeView ? <Button onClick={() => setChangeView(!changeView)}>See List View</Button> : <Button onClick={() => setChangeView(!changeView)}>See Calendar View</Button>}
      </div>
      <Col xs={12}>
        {changeView ? <MainCalendar /> : <List/>}
      </Col>
    </>
  )
}

export default Todo