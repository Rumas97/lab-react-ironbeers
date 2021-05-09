import React, { Component } from 'react'
import axios from 'axios'

class RandomBeer extends Component {

    state={
        randomBeerDetails:{}
    }

    componentDidMount(){
        console.log(this.props)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=>{
            console.log(response)
            const{image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = response.data
            let oneRandomBeerDetail ={
                image_url:image_url,
                name:name,
                tagline:tagline,
                first_brewed:first_brewed,
                attenuation_level:attenuation_level,
                description:description,
                contributed_by:contributed_by
            }
            this.setState({
                randomBeerDetails:oneRandomBeerDetail
            })
        })
        .catch(()=>{'error random beer'})
    }

    render() {
        const{randomBeerDetails}= this.state
        return (
            <div>
                <h1>Random Beer</h1>
                <h1>{randomBeerDetails.name}</h1>
                <img src={randomBeerDetails.image_url} />
                <p>{randomBeerDetails.tagline}</p>
                <p>{randomBeerDetails.first_brewed}</p>
                <p>{randomBeerDetails.attenuation_level}</p>
                <p>{randomBeerDetails.description}</p>
                <p>{randomBeerDetails.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer
