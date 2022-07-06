import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions"

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

    case COMPLETE_TASK:
      return {
        ...state,
        completed: action.task.complete = !action.task.complete
      }

    default:
      return state
  }
}