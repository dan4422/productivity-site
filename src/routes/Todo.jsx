import React from 'react'
import TodoForm from '../components/TodoForm'
import MainCalendar from '../components/MainCalendar'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

function Todo() {
  return (
    <>
    <TodoForm/>
  <MainCalendar/>
  </>
  )
}

export default Todo