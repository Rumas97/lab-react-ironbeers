import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBeers extends Component {
    render() {
        const{beers} = this.props
        return (
            <div>{
                beers.map((beer)=>{
                    console.log(beer._id)
                    return <div key={beer._id}>
                        
                        
                        <Link to ={`/beers/${beer._id}`} beers={beers}>{beer.name}</Link>
                        <img src={beer.image_url}/>
                        
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        </div>
                        
                        
                    
                })
                }
                
            </div>
        )
    }
}

export default ListBeers
