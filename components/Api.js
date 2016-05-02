import React, { PropTypes } from 'react'

const Api = ({ onClick, name }) => (
  <li
    onClick={onClick}
    >{name}
  </li>
)

Api.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Api
