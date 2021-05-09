import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './Navbar'


class SingleBeer extends Component {

    state={
        beerDetails:{}
    }

    componentDidMount(){
        let beerId= this.props.match.params.id
        //console.log(this.props)
        //console.log(beerId)
        console.log('mounts')
        

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=>{
            //console.log(response)
            const{image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = response.data
            let singleBeerDetails ={
                image_url:image_url,
                name:name,
                tagline:tagline,
                first_brewed:first_brewed,
                attenuation_level:attenuation_level,
                description:description,
                contributed_by:contributed_by
            }
            this.setState({
                beerDetails:singleBeerDetails
            })
        })
        .catch(()=>{console.log('error single beer')})
    }
    // This is not needed apparently.But why??
    //   componentDidUpdate(){
    //      console.log('update')
    //       let beerIdUrl= this.state.beerDetails.beerIdUrl
    //       let propsId  = this.props.match.params.id

    //       if(beerIdUrl !== propsId){
    //           this.componentDidMount()
    //       }
    //   }

    render() {
        const{beerDetails}= this.state
       // console.log(beerDetails)
       console.log('rendering')
        return (
            <div>
                <Navbar />
                <div>
                <h1>{beerDetails.name}</h1>
                <img style={{width:'60px', height:'200px'}} src={beerDetails.image_url} />
                <p>{beerDetails.tagline}</p>
                <p>First brewed: {beerDetails.first_brewed}</p>
                <p>Attenuation level: {beerDetails.attenuation_level}</p>
                <p>Description: {beerDetails.description}</p>
                <p>Contributed by: {beerDetails.contributed_by}</p>
            </div>
            </div>
            
        )
    }
}

export default SingleBeer