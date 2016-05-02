import { connect } from 'react-redux'
import { fetchDocs, selectApi } from '../actions'
import Api from '../components/Api'

const getApis = (apis) => {
  return apis
}

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
    //   dispatch(selectApi(api.name))
    //   dispatch(fetchDocs(api.name))
    // }
  }
}

const ApiLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(Api)

export default ApiLogic
