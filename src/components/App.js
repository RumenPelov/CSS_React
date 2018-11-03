import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import NavBar from './Navigation/NavBar';
import Header from './Header/Header';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container" >
        <div className="" >
          
          <NavBar />

          <Route exact path="/" render={() => <Redirect to="/organizations/"/> } />
          <Route exact path="/organizations/" component={Header} />
          <Route exact path="/influencers/" component={Header} />
          <Route exact path="/events/" component={Header} />
          <Route exact path="/goals/" component={Header} />

        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
