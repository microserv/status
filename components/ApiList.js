import React, { PropTypes } from 'react'

import Api from './Api'

const ApiList = ({ apis, onApiClick }) => (
  <ul>
    {apis.map(api =>
      <Api
        key={api.id}
        {...api}
        onClick={(e) => onApiClick(e, api)}
      />  
    )}
  </ul>
)

ApiList.propTypes = {
  apis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onApiClick: PropTypes.func.isRequired
}

export default ApiList
