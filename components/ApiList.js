import React, { PropTypes } from 'react'
import { List } from 'react-mdl'

import Api from './Api'

const ApiList = ({ apis, onApiClick }) => (
  <div>
    <h3>List of APIs</h3>
    <List>
      {apis.map(api =>
        <Api
          key={api.id}
          {...api}
          onClick={(e) => onApiClick(e, api)}
        />  
      )}
    </List>
  </div>
)

ApiList.propTypes = {
  apis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onApiClick: PropTypes.func.isRequired
}

export default ApiList
