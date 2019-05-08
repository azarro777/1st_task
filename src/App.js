import React, {Component} from 'react';
import './App.css';
import TaskList from "./components/TaskList";
import Details from "./components/Details";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";


export default class App extends Component {

  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={TaskList}/>
          <Route path="/details" component={Details}/>
        </Switch>
      </React.Fragment>

    )
  }
}


