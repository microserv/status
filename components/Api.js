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
    let isFetching = false
    if (this.props.docsByApi[this.props.selectedApi] !== undefined) {
      isFetching = this.props.docsByApi[this.props.selectedApi].isFetching
    }
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
                API URL: <a href={thisApi.apiUri} target="_blank">
                  {thisApi.apiUri}
                </a>
                <h4>Response from API</h4>
                { ( this.props.docsByApi[this.props.selectedApi].items.type === 'cors' ) ?
                <pre>
                  Request type: {this.props.docsByApi[this.props.selectedApi].items.type}
                  <br />
                  Response 200 OK: { (this.props.docsByApi[this.props.selectedApi].items.ok) ? 'OK' : 'Not OK' }
                  <br />
                  HTTP Status Code: {this.props.docsByApi[this.props.selectedApi].items.status}
                  <br />
                  HTTP Status Text: {this.props.docsByApi[this.props.selectedApi].items.statusText}
                </pre>
                :
                <pre>
                  Request type: {this.props.docsByApi[this.props.selectedApi].items.type}
                  <br />
                  Response 200 OK: Not available when requesting opaque
                  <br />
                  HTTP Status Code: Not available when requesting opaque
                  <br />
                  HTTP Status Text: Not available when requesting opaque
                </pre>
                }
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
