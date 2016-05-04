import React, { PropTypes } from 'react'
import { ProgressBar, Tabs, Tab } from 'react-mdl'
import ApiDocsLogic from '../containers/ApiDocs'

class Api extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeTab: 0,
    }
  }
  render() {
    let isFetching = this.props.docsByApi[this.props.selectedApi].isFetching
    let thisApi = null
    for (let i = 0; i < this.props.apis.length; i++) {
      if (this.props.apis[i].name === this.props.selectedApi) {
        thisApi = this.props.apis[i]
      }
    }
    return (
      <div>
        <Tabs 
          activeTab={this.state.activeTab}
          onChange={ (tabId) => this.setState({ activeTab: tabId }) }>
          <Tab>Overview</Tab>
          <Tab>Docs</Tab>
        </Tabs>
        <section>
          <h3>{thisApi.name}</h3>
          <div className="content">
            { (isFetching) ?
              <ProgressBar indeterminate /> : <span></span>
            } { (!isFetching && this.state.activeTab === 0) ?
              <p>
                API URL: <a href={thisApi.uri} target="_blank">
                  {thisApi.uri}
                </a>
              </p> : 
              <ApiDocsLogic />
            }
          </div>
        </section>
      </div>
    )
  }
}

Api.propTypes = {
  apis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })),
  docsByApi: PropTypes.object.isRequired,
  selectedApi: PropTypes.string.isRequired
}

export default Api
