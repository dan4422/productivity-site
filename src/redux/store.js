import { createStore, combineReducers } from 'redux'
import { tasksReducer } from './todo/reducers'

const rootReducer = combineReducers({
  // Reducers go here
  todo: tasksReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)