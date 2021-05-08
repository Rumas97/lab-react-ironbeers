import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer'
import axios from 'axios'

class App extends Component {

  state={
    beers:[]
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
      console.log(response)
      this.setState({
        beers:response.data
      })
    })
    .catch(()=>{})
  }

  render() {
    const{beers}= this.state
    return (
      <div>
        
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/beers' render={()=>{
          return <ListBeers beers={beers} />
        }}/>
        <Route  path='/beers/:id' render={(routerProps)=>{
          return <SingleBeer {...routerProps}/>
        }} />
        </Switch>
        
      </div>
    )
  }
}


export default App;
