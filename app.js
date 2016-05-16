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

// Add APIs here
const APIs = [
  { id: 1, name: 'microauth', apiUri: 'http://despina.128.no:33193' },
  { id: 2, name: 'search', apiUri: 'http://despina.128.no:33196' },
  { id: 3, name: 'spell-check', apiUri: 'http://despina.128.no:33199' },
  { id: 4, name: 'publish-django', apiUri: 'http://despina.128.no:33209' },
  { id: 5, name: 'templates', apiUri: 'http://despina.128.no:33225' },
  { id: 6, name: 'frontend', apiUri: 'http://despina.128.no:33228' },
  { id: 7, name: 'indexer', apiUri: 'http://despina.128.no:33252' }
]

// Automatically populate the APIs
for (let i = 0; i < APIs.length; i++) {
  let api = APIs[i]
  store.dispatch(addApi(api.name, api.id, api.apiUri))
  // Get their initial status
  store.dispatch(fetchDocs(api.name))
}

unsubscribe()

/* end debug */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
