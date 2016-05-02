import React from 'react'
import { Card, Cell, Grid } from 'react-mdl'
import ApiListLogic from '../containers/ApiList'
import ApiDocsLogic from '../containers/ApiDocsLogic'

const App = () => (
  <div>
    <Grid component="section">
      <Cell col={2} phone={12}>
        <ApiListLogic />
      </Cell>
      <Cell col={10} phone={12}>
        <ApiDocsLogic />
      </Cell>
    </Grid>
  </div>
)

export default App
