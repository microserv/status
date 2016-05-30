import { connect } from 'react-redux'
import { fetchDocs, selectApi } from '../actions'
import ApiDocs from '../components/ApiDocs'

const mapStateToProps = (state, ownProps) => {
  let currentState = state
  let thisApi = null
  for (let i = 0; i < currentState.apis.length; i++) {
    if (currentState.apis[i].name === currentState.selectedApi) {
      thisApi = currentState.apis[i]
    }
  }
  let swaggerDocs = thisApi.apiUri + "/static/swagger.json"
  return {
    apis: state.apis,
    docsByApi: state.docsByApi,
    selectedApi: state.selectedApi,
    swaggerClient: 'https://despina.128.no/swagger/',
    swaggerDocs: swaggerDocs,
    thisApi: thisApi
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const ApiDocsLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiDocs)

export default ApiDocsLogic
