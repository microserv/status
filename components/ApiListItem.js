import React, { PropTypes } from 'react'
import { Icon, ListItem, ListItemAction, ListItemContent, Spinner } from 'react-mdl'

const Api = ({ onClick, name, docsByApi, selectedApi }) => (
  <ListItem shadow={0}>
    { (docsByApi[name].isFetching) ? 
      <Spinner /> : <Icon name={(docsByApi[name].receivedAt) ? 
      "done" : "error"} />
    }
    {name}
    <ListItemAction onClick={onClick}>
      <a href="#">
        Show
      </a>
    </ListItemAction>
  </ListItem>
)

Api.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  docsByApi: PropTypes.object.isRequired,
  selectedApi: PropTypes.string.isRequired
}

export default Api
