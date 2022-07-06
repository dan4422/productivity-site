export const ADD_TASK = 'todo/ADD_TASK'
export const DELETE_TASK = 'todo/DELETE_TASK'
export const COMPLETE_TASK = 'todo/COMPLETE_TASK'


export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  }
}

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    task
  }
}

export const completeTask = (task) => {
  return {
    type: COMPLETE_TASK,
    task
  }
}