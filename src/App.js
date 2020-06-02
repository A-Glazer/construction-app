import React from 'react';
import "./styles.css"
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  
    render() {
      return (
        <div className="App">
          <NavBar />
          <Switch>
              <Route path="/" component={Home} />
          </Switch>
        </div>
      );
    }
  }
  
  
  
  export default (App)