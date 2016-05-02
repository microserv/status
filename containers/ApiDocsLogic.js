import { connect } from 'react-redux'
import { fetchDocs } from '../actions'
import ApiDocs from '../components/ApiDocs'

const mapStateToProps = (state, ownProps) => {
  return {
    docsByApi: state.docsByApi,
    selectedApi: state.selectedApi
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onApiClick: (e, api) => {
    //   e.preventDefault()
    //   dispatch(fetchDocs(api.name))
    // }
  }
}

const ApiDocsLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiDocs)

export default ApiDocsLogic
