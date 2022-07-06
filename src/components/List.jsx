import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import ListItem from './ListItem'
import { useState } from 'react'

function List() {
  const tasks = useSelector(state => state.todo.tasks)
  const [sortAllDay, setSortAllDay] = useState(false)

  return (
    <>
      <Table striped bordered hover className='mt-4 mx-auto' style={{width:'95vw'}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>All Day? <Button onClick={() => setSortAllDay(!sortAllDay)}>Sort All Day Events to top</Button></th>
            <th>Action</th>
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