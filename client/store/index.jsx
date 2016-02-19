import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import rootReducer from '../reducers'
import apiMiddleware from '../middlewares/apiMiddleware'
import bridgeMiddleware from '../middlewares/bridgeMiddleware'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  var middlewares = [apiMiddleware, bridgeMiddleware]
  const finalCreateStore = compose(
    applyMiddleware(...middlewares)
    // applyMiddleware(middlewares)
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
