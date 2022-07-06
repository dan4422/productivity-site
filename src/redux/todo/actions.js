export const ADD_TASK = 'todo/ADD_TASK'
export const DELETE_TASK = 'todo/DELETE_TASK'
export const TOGGLE_TASK = 'todo/TOGGLE_TASK'


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

export const toggleTask = (task) => {
  return {
    type: TOGGLE_TASK,
    task
  }
}