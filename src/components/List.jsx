import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import ListItem from './ListItem'
import { useState } from 'react'
import styles from './List.module.css'

function List() {
  const tasks = useSelector(state => state.todo.tasks)
  const [sort,setSort] = useState(null)
  const [direction,setDirection] = useState(1)

  const sortedTask = sort ? tasks.sort((a,b) => a[sort] > b[sort] ? direction : -direction) : tasks

  const handleSortClick = (name) => {
    if (name === sort) {
      setDirection(-direction)
    } else {
      setDirection(1)
      setSort(name)
    }
  }

  return (
    <>
      <Table responsive striped bordered hover className={`${styles.table} mt-4 mx-auto`}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.completeRow}>√ <br /><Button className='btn-sm' variant="success" onClick={() => handleSortClick('complete')}>Sort</Button>{sort !== 'complete' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th>Color <br /> <Button className='btn-sm' variant="success" onClick={() => handleSortClick('color')}>Sort</Button>{sort !== 'color' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th className={styles.titleRow}>Title  <br /><Button className='btn-sm' variant="success" onClick={() => handleSortClick('title')}>Sort</Button> {sort !== 'title' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th>Start  <br /><Button className='btn-sm' variant="success" onClick={() => handleSortClick('start')}>Sort</Button>{sort !== 'start' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th>End  <br /><Button className='btn-sm' variant="success" onClick={() => handleSortClick('end')}>Sort</Button>{sort !== 'end' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th className={styles.allDayRow}>All Day  <br /><Button className='btn-sm' variant="success" onClick={() => handleSortClick('allDay')}>Sort</Button>{sort !== 'allDay' ? '' : direction === 1 ? '\u25B2' : '\u25BC'}</th>
            <th className={styles.actionRow}>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
        {tasks?.length > 0 ? '':'Nothing in here yet. Get Started!'}
        {sortedTask && sortedTask.map((task,i) => {
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