import React from 'react'
import { Card, Cell, Grid } from 'react-mdl'
import ApiListLogic from '../containers/ApiList'
import ApiLogic from '../containers/ApiLogic'

const App = () => (
  <div>
    <Grid component="section">
      <Cell col={3} phone={12}>
        <ApiListLogic />
      </Cell>
      <Cell col={9} phone={12}>
        <ApiLogic />
      </Cell>
    </Grid>
  </div>
)

export default App
