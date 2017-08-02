import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import appReducers from './app/app.reducer'
import createSagaMiddleware from 'redux-saga'

const loggerMiddleware = createLogger({})
const sagaMiddleware = createSagaMiddleware()

const makeStore = ( initialState ) => {
  const store = createStore(
    appReducers,
    initialState,
    compose(
      applyMiddleware( loggerMiddleware, sagaMiddleware ),
    ),
  )

  return store
}

export default makeStore
