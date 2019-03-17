import React, { Component } from 'react';
// import styles from './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../context';
import UserProfileView from '../Views/UserProfileView/UserProfileView';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, graphql, Query} from 'react-apollo';

import Header from '../components/Header/Header';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4001/graphql',
})

const getUserDetails = gql`
{
  user(id: "5c8d26635ce4cc790ad4b8eb"){
    id
    username
    description
    joinDate
    follows{
      id
      username
    }
  }
}
`;

class App extends Component {
  
  state={
    user: {
      name: 'madorange',
      image: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
      headerImage: 'https://images.unsplash.com/photo-1501236570302-906143a7c9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    }


  }

  componentDidMount(){
    
    //console.log(()=>graphql(getUserDetails));
  };

  handleDataFetch(arg){
    this.setState({
      user: arg.data,
    })
    console.log(arg.data);
  }
  //data to json
  render() {
    
    const contextElements = {
      user: this.state.user,
      pathname: `/user/${this.state.user.name}`,
      text: 'dupa',
    }
    
    return (

      <ApolloProvider client={client}>
      <Query query={getUserDetails}>
        {({loading, error, data})=>{
            if(loading) console.log('loadign');
            if(error) console.log(error);
            if(data) this.handleDataFetch(data);
        return null;
        }}
      </Query>
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
      </ApolloProvider>
  
    );
  }
}

export default App;
