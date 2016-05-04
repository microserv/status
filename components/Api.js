import React, { PropTypes } from 'react'
import { ProgressBar, Tabs, Tab } from 'react-mdl'
import ApiDocs from './ApiDocs'

class Api extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      activeTab: 1,
    }
  }
  render() {
    return (
      <div>
        <Tabs 
          activeTab={this.state.activeTab}
          onChange={ (tabId) => this.setState({ activeTab: tabId }) }>
          <Tab>HTML</Tab>
          <Tab>JSON</Tab>
        </Tabs>
        <section>
          <h3>{this.props.selectedApi}</h3>
          <div className="content">
            { 
              (this.props.docsByApi[this.props.selectedApi].isFetching) ?
              <ProgressBar indeterminate /> : <ApiDocs />
            }
          </div>
        </section>
      </div>
    )
  }
}

ApiDocs.propTypes = {
  docsByApi: PropTypes.object.isRequired,
  selectedApi: PropTypes.string.isRequired
}

export default Api
