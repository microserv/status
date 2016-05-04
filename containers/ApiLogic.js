import { connect } from 'react-redux'
import { fetchDocs } from '../actions'
import Api from '../components/Api'

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

const ApiLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(Api)

export default ApiLogic
