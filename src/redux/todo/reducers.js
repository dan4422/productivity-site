import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actions"

const defaultState = {
  tasks: [],
}

export function tasksReducer(oldState = defaultState, action) {
  const state = {tasks: oldState.tasks.map(task => ({...task, end: new Date(task.end), start: new Date(task.start)}))}
  switch (action.type) {
    case ADD_TASK: 
    return {
      ...state,
      tasks: [action.task, ...state.tasks]
    }

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task,i) => task.id !== action.task.id)
      }

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.task.id ? {...task, complete: !task.complete}: task),
      }

    default:
      return state
  }
}