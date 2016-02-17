import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import rootReducer from '../reducers'
import apiMiddleware from '../middlewares/apiMiddleware'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const finalCreateStore = compose(
    applyMiddleware(apiMiddleware)
  )(create)

  // const store = create(rootReducer, initialState)
  const store = finalCreateStore(rootReducer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
