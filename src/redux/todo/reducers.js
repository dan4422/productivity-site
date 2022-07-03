import { ADD_TODO, DELETE_TODO } from "./actions"

const defaultState = {
  tasks: [],
}

export function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO: 
    return {
      ...state,
      tasks: [action.task, ...state.tasks]
    }

    case DELETE_TODO:
      return {
        tasks: state.tasks.filter((todo,i) => i !== action.index)
      }

    default:
      return state
  }
}