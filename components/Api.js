import React, { PropTypes } from 'react'
import { ListItem, ListItemAction, ListItemContent } from 'react-mdl'

const Api = ({ onClick, name }) => (
  <ListItem shadow={0}>
    {name}
    <ListItemAction onClick={onClick}>
      <a href="#">
        Docs
      </a>
    </ListItemAction>
  </ListItem>
)

Api.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Api
