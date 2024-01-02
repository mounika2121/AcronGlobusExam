import {Route, Switch} from 'react-router-dom'

import Questions from './components/Questions'
import NavBar from './components/NavBar'
import Header from './components/Header'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <NavBar />
    <div className="app-body">
      <Header />
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
