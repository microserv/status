import { connect } from 'react-redux'
import { fetchDocs } from '../actions'
// import Link from '../components/Link'
import ApiList from '../components/ApiList'

const getApis = (apis) => {
  return apis
}

const mapStateToProps = (state, ownProps) => {
  return {
    apis: getApis(state.apis)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onApiClick: (e, api) => {
      e.preventDefault()
      dispatch(fetchDocs(api.name))
    }
  }
}

const ApiListLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiList)

export default ApiListLogic
