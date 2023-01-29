import { combineReducers } from 'redux'
import { filtersReducer } from './filters'
import { todoReducer } from './todo'

export default combineReducers({
  todoReducer,
  filtersReducer
})