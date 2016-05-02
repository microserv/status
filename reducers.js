import { combineReducers } from 'redux'

import { ADD_API, REQUEST_DOCS, RECEIVE_DOCS, SELECT_API } from './actions'

function apis(state = [], action) {
  switch (action.type) {
    case ADD_API:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
      break;
    default:
      return []
  }
}

const rootReducer = combineReducers({
  apis
})

export default rootReducer
