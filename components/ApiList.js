import React, { PropTypes } from 'react'
import { List, IconButton } from 'react-mdl'

import ApiListItemLogic from '../containers/ApiListItem'

const ApiList = ({ apis, onApiClick, onRefreshClick }) => (
  <div>
    <h3>
      List of APIs
      <IconButton
        name="cached"
        onClick={ (e) => onRefreshClick(e) }
        />
    </h3>
    <List>
      {apis.map(api =>
        <ApiListItemLogic
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
  onApiClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired
}

export default ApiList
