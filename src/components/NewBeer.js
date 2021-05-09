import React, { Component } from 'react'
import Navbar from './Navbar'

class NewBeer extends Component {
    render() {
        const{onAdd}= this.props
        return (
            <div>
                <Navbar />
                <div>
                <h1>Add a new beer</h1>
                <form onSubmit={onAdd}>
                    <input name='name' type='text' placeholder='Enter name of the beer'/>
                    <input name='tagline' type='text' placeholder='Enter a tagline '/>
                    <input name='description' type='text' placeholder='Enter a description '/>
                    <input name='first_brewed' type='text' placeholder='First brewed on'/>
                    <input name='brewers_tips' type='text' placeholder='Any tips of brewers '/>
                    <input name='attenuation_level' type='number' placeholder='Attenuation level'/>
                    <input name='contributed_by' type='text' placeholder='Contributed By'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            </div>
            
        )
    }
}

export default NewBeer
