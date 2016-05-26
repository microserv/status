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
  { id: 1, name: 'microauth', apiUri: 'https://despina.128.no/auth' },
  { id: 2, name: 'search', apiUri: 'https://despina.128.no/api/search' },
  { id: 3, name: 'spell-check', apiUri: 'https://despina.128.no/spell' },
  { id: 4, name: 'publish-django', apiUri: 'https://despina.128.no/publish' },
  { id: 5, name: 'templates', apiUri: 'https://despina.128.no/templates' },
  { id: 6, name: 'frontend', apiUri: 'https://despina.128.no/' },
  { id: 7, name: 'indexer', apiUri: 'https://despina.128.no/indexer' }
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
