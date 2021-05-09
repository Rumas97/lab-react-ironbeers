import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

class HomePage extends Component {
    render() {
        return (
            <div>
                <img src={beers}/>
                <h2><Link to ='/beers'>All Beers</Link></h2>
                <img src={newBeer}/>
                <h2><Link to ='/random-beer'>Random Beer</Link></h2>
                <img src={randomBeer}/>
                <h2><Link to ='/new-beer'>New Beer</Link></h2>
            </div>
        )
    }
}

export default HomePage
