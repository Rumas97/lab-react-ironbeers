import axios from 'axios'
import React, { Component } from 'react'


class SingleBeer extends Component {

    state={
        beerDetails:{}
    }

    componentDidMount(){
        let beerId= this.props.match.params.id
        console.log(this.props)
        console.log(beerId)

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{
            console.log(response)
            const{image_url,name,tagline} = response.data
            let singleBeerDetails ={
                image_url:image_url,
                name:name,
                tagline:tagline
            }
            this.setState({
                beerDetails:singleBeerDetails
            })
        })
        .catch(()=>{console.log('error single beer')})
    }

    componentDidUpdate(){
        let beerIdUrl= this.state.beerDetails.beerIdUrl
        let propsId  = this.props.match.params.id

        if(beerIdUrl !== propsId){
            this.componentDidMount()
        }
    }

    render() {
        const{beerDetails}= this.state
        return (
            <div>
                <p>{beerDetails.name}</p>
            </div>
        )
    }
}

export default SingleBeer