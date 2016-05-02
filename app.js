import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { addApi, selectApi, fetchDocs } from './actions'
import rootReducer from './reducers'
import App from './components/App'

const loggerMiddleware = createLogger()

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

/* debug */

console.log(store.getState())

let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

// Automatically populating list
store.dispatch(addApi('templates', 1))
store.dispatch(addApi('microauth', 2))
store.dispatch(addApi('snek', 3))

store.dispatch(selectApi('microauth'))
store.dispatch(fetchDocs('microauth')).then(() => 
  console.log(store.getState())
)

store.dispatch(selectApi('templates'))
store.dispatch(fetchDocs('templates')).then(() => 
  console.log(store.getState())
)

unsubscribe()

/* end debug */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
