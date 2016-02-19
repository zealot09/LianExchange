import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'
import todos from './todos'
import coins from './coins'
import notifications from './notifications'
import account from './account'
import handleLoading from './loading'

export default combineReducers({
  routing,
  coins,
  notifications,
  account,
  handleLoading
})
