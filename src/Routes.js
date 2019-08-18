
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

  import movie from './movie';
  

  class Routes extends Component{
    constructor(props){
        super(props);
      }
      

    render(){
        return(
            <div>
        <BrowserRouter>
        <Switch>
                  <Route path="/" component={movie} exact />
                  <Route path="/movie" component={movie} />
                 
                  </Switch>
        </BrowserRouter>
        </div>

        );
    }
  }
  export default Routes;
