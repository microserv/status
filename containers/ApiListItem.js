import { connect } from 'react-redux'
import { fetchDocs, selectApi } from '../actions'
import ApiListItem from '../components/ApiListItem'

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

const ApiListItemLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiListItem)

export default ApiListItemLogic
