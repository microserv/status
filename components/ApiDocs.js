import React, { PropTypes } from 'react'
import { ProgressBar, Tabs, Tab } from 'react-mdl'

const ApiDocs = ({selectedApi, swaggerClient, swaggerDocs, thisApi}) => (
  <div>
    <p>API documentation follows the standard set by <a href="http://swagger.io" target="_blank">Swagger</a> and the Open API Initiative. 
    Microserv hosts its own Swagger client available at <a href="https://despina.128.no/swagger/" target="_blank">https://despina.128.no/swagger/</a>.
    </p>
    { (selectedApi !== "frontend" && selectedApi !== "microauth"? <p>
      Click <a href={swaggerClient + "?url=" + swaggerDocs} target="_blank">here</a> or provide the Swagger client with this path to read API documentation for {selectedApi}: <a href={thisApi.apiUri + swaggerDocs} target="_blank">{thisApi.apiUri + "/static/swagger.json"}</a>
    </p> : <p>The {selectedApi} service does not offer an API.</p> )}
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
