import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addApi } from './actions'
import ApiRootApp from './reducers'
import App from './components/App'

let store = createStore(ApiRootApp)

/* debug */

console.log(store.getState())

let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

// Automatically populating list
store.dispatch(addApi('top', 1))
store.dispatch(addApi('kek', 2))
store.dispatch(addApi('snek', 3))

unsubscribe()

/* end debug */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
