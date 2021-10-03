import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTE_HOME, ROUTE_DOC } from '@constants/routes'
import Home from '@pages/Home'
import Secondary from '@pages/Secondary'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_DOC}>
          <Home />
        </Route>
        <Route path={ROUTE_HOME}>
          <Secondary />
        </Route>
      </Switch>
    </Router>
  )
}
