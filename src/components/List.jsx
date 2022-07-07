import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import ListItem from './ListItem'
import { useState } from 'react'
import styles from './List.module.css'

function List() {
  const tasks = useSelector(state => state.todo.tasks)
  const [sortAllDay, setSortAllDay] = useState(false)

  return (
    <>
      <Table striped bordered hover className={`${styles.table} mt-4 mx-auto`}>
        <thead>
          <tr>
            <th className={styles.completeRow}>Complete?</th>
            <th className={styles.titleRow}>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th className={styles.allDayRow}>All Day? <Button variant="success" onClick={() => setSortAllDay(!sortAllDay)}>Sort</Button></th>
            <th className={styles.actionRow}>Action</th>
          </tr>
        </thead>
        <tbody className="border">
        {tasks && sortAllDay ? tasks.sort((a,b) => a.allDay - b.allDay).sort((a,b) => a.start - b.start).map((task,i) => {
          return (
            <ListItem key={i} data={task}/>
          )
        }) : tasks.sort((a,b) => b.allDay - a.allDay).sort((a,b) => a.start - b.start).map((task,i) => {
          return (
            <ListItem key={i} data={task}/>
          )
        })}
      </tbody>
    </Table>
    </>
  )
}

export default List