import { connect } from 'react-redux'
import { fetchDocs, selectApi } from '../actions'
import ApiDocs from '../components/ApiDocs'

const mapStateToProps = (state, ownProps) => {
  return {
    apis: state.apis,
    docsByApi: state.docsByApi,
    selectedApi: state.selectedApi
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
