import fetch from 'isomorphic-fetch'

/*
 * Action types
 */
export const ADD_API = 'ADD_API';

export function addApi(name, id, apiUri) {
  return {
    type: ADD_API,
    name, id, apiUri
  }
}

export const SELECT_API = 'SELECT_API'

export function selectApi(api) {
  return {
    type: SELECT_API,
    api
  }
}

export const REQUEST_DOCS = 'REQUEST_DOCS'

export function requestDocs(api) {
  return {
    type: REQUEST_DOCS,
    api
  }
}

export const RECEIVE_DOCS = 'RECEIVE_DOCS'

export function receiveDocs(api, response) {
  return {
    type: RECEIVE_DOCS,
    api,
    response: response,
    receivedAt: !(response.error) ? Date.now() : null
  }
}

export const REQUEST_SWAGGER = 'REQUEST_SWAGGER'

export function renderSwagger(api) {
  return {
    type: REQUEST_SWAGGER,
    api
  }
}

export function fetchDocs(api) {
  return function(dispatch, getState) {
    const state = getState()
    
    let apiUri = null
    // Find the URI of selectedApi
    for (let i = 0; i < state.apis.length; i++) {
      if (state.apis[i].name === api) {
        apiUri = state.apis[i].apiUri
      }
    }
    
    if (apiUri === null) {
      return {}
    }
    
    // Inform app state about fetching docs
    dispatch(requestDocs(api))
    
    return fetch(apiUri)
      .then(response => response.json())
      .catch(error => { 
        console.log(error)
        return {error: error}
      })
      .then(response => dispatch(receiveDocs(api, response))
      )
  }
}

export function refreshAllApis() {
  return function (dispatch, getState) {
    const state = getState()
    state.apis.forEach(function (api) {
      dispatch(fetchDocs(api.name))
    })
  }
}
