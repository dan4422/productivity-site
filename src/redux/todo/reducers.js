import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actions"

const defaultState = {
  tasks: [],
}

export function tasksReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TASK: 
    return {
      ...state,
      tasks: [action.task, ...state.tasks]
    }

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task,i) => task !== action.task)
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