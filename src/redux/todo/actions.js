export const ADD_TODO = 'todos/ADD_TODO'
export const DELETE_TODO = 'todos/DELETE_TODO'


export const addToDo = (task) => {
  return {
    type: ADD_TODO,
    task,
  }
}

export const deleteToDo = (index) => {
  return {
    type: DELETE_TODO,
    index
  }
}