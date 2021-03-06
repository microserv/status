import { connect } from 'react-redux'
import { fetchDocs, selectApi } from '../actions'
import ApiListItem from '../components/ApiListItem'

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

const ApiListItemLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiListItem)

export default ApiListItemLogic
