import React, { PropTypes } from 'react'
import { ProgressBar, Tabs, Tab } from 'react-mdl'

const ApiDocs = () => (
  <div>
    <p>Content</p>
  </div>
)

ApiDocs.propTypes = {
  apis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })),
  docsByApi: PropTypes.object.isRequired,
  selectedApi: PropTypes.string.isRequired
}

export default ApiDocs
