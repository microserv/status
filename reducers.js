import { combineReducers } from 'redux'

import { ADD_API, REQUEST_DOCS, RECEIVE_DOCS, SELECT_API } from './actions'

function apis(state = [], action) {
  switch (action.type) {
    case ADD_API:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          apiUri: action.apiUri
        }
      ]
      break
    default:
      return state
  }
}

function selectedApi(state = 'templates', action) {
  switch (action.type) {
    case SELECT_API:
      return action.api
      break
    default:
      return state
  }
}

function docs(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_DOCS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
      break
    case RECEIVE_DOCS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.response,
        receivedAt: action.receivedAt
      })
      break
    default:
      return state
  }
}

function docsByApi(state = {}, action) {
  switch (action.type) {
    case REQUEST_DOCS:
    case RECEIVE_DOCS:
      return Object.assign({}, state, {
        [action.api]: docs(state[action.api], action)
      })
      break
    default:
      return state
  }
}


const rootReducer = combineReducers({
  apis,
  selectedApi,
  docsByApi
})

export default rootReducer
