/*
 * Action types
 */
export const ADD_API = 'ADD_API';

export function addApi(name, id) {
  return {
    type: ADD_API,
    name, id
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
    receivedAt: Date.now()
  }
}

export const REQUEST_SWAGGER = 'REQUEST_SWAGGER'

export function renderSwagger(api) {
  return {
    type: REQUEST_SWAGGER,
    api
  }
}
