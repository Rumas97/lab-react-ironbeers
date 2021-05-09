import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import HomePage from './components/HomePage';
import { Route, Switch, withRouter } from 'react-router';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer'
import axios from 'axios'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {

  state={
    beers:[]
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=>{
      //console.log(response)
      this.setState({
        beers:response.data
      })
    })
    .catch(()=>{})
  }

  handleAddNewBeer =(event)=>{
    event.preventDefault()
    console.log(event.target)
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.tagline.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value
    }
    console.log(newBeer)

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then((response)=>{
      console.log(this.props)
      this.setState({
        beers:[response.data, ...this.state.beers]
        
      },()=>{
        this.props.history.push('/')
      })
    })
    .catch(()=>{'add new beer failed'})
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
        <Route  path='/random-beer' render={(routerProps)=>{
          return <RandomBeer {...routerProps} />
        }} />
        <Route  path='/new-beer' render={()=>{
          return <NewBeer onAdd={this.handleAddNewBeer}/>
        }} />

        </Switch>
        
      </div>
    )
  }
}


export default withRouter(App);
