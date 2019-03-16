import React, { Component } from 'react';
// import styles from './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../context';
import UserProfileView from '../Views/UserProfileView/UserProfileView';

import Header from '../components/Header/Header';

class App extends Component {
  
  state={
    user: {
      name: 'madorange',
      image: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
      headerImage: 'https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    }

  }

  componentDidMount(){
    
  };

  render() {
    
    const contextElements = {
      user: this.state.user,
      pathname: `/user/${this.state.user.name}`,
      text: 'dupa',
    }
    
    return (

      <AppContext.Provider value={contextElements}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={
              () => <Header />
            } />
            <Route path='/home' render={
              ()=> <Header />
            }/>
            <Route exact path={contextElements.pathname} render={
              () => <UserProfileView />
            } />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
  
    );
  }
}

export default App;
