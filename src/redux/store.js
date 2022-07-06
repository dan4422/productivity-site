import { applyMiddleware,createStore, combineReducers } from 'redux'
import { tasksReducer } from './todo/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



const localCache = (store) => (next) => (action) => {
  next(action)
  const state = store.getState()
  localStorage.setItem('tasks-redux', JSON.stringify(state))
}

const rootReducer = combineReducers({
  // Reducers go here
  todo: tasksReducer,
})

const defaultState = {
  todo: undefined,
}

export const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('tasks-redux')) || defaultState,
  composeWithDevTools(applyMiddleware(thunk, localCache))
)