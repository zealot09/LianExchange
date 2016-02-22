import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'
import coinStore from './coins'
import notificationStore from './notifications'
import accountStore from './account'
import loadingStore from './loading'

export default combineReducers({
  routing,
  coinStore,
  notificationStore,
  accountStore,
  loadingStore
})
