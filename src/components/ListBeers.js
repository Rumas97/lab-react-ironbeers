import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class ListBeers extends Component {
    render() {
        const{beers} = this.props
        return (
            <div>
                <Navbar />
                <div>{
                beers.map((beer)=>{
                    //console.log(beer._id)
                    return <div key={beer._id}>
                        
                        
                        <h3><Link to ={`/beers/${beer._id}`} beers={beers}>{beer.name}</Link></h3>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                        <img style={{width:'60px', height:'200px'}}src={beer.image_url}/>
                        <br/>
                        <br/>
                        <br/>
                        
                        
                        </div>
                        
                        
                    
                })
                }
                
            </div>
            </div>
            
            
        )
    }
}

export default ListBeers
