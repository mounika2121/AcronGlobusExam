import {Route, Switch} from 'react-router-dom'

import About from './components/About'
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
        <Route exact path="/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
