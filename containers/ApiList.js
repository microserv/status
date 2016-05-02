import { connect } from 'react-redux'
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
    onApiClick: (id) => {
      console.log('clicked api', id)
      // dispatch()
    }
  }
}

const ApiListLogic = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiList)

export default ApiListLogic
