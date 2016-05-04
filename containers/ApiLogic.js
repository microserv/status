import { connect } from 'react-redux'
import { fetchDocs } from '../actions'
import Api from '../components/Api'

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

const ApiLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(Api)

export default ApiLogic
