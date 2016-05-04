import React, { PropTypes } from 'react'
import { ProgressBar, Tabs, Tab } from 'react-mdl'

const ApiDocs = () => (
  <div>
    <p>Content</p>
  </div>
)

ApiDocs.propTypes = {
  docsByApi: PropTypes.object.isRequired,
  selectedApi: PropTypes.string.isRequired
}

export default ApiDocs
