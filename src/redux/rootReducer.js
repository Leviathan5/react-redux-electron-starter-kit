import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import electron_app from './modules/ElectronApp'

export default combineReducers({
  electron_app,
  counter,
  router
})
