import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import  {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";
import Login from './Login';
const routing = (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" exact component = {Login}></Route>
      <Route path="/PokemonList" component = {PokemonList}></Route>
    </Switch>
  </div>
</Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">      
         {routing}
         
        </header>
        
      </div>
    );
  }
}

export default App;
