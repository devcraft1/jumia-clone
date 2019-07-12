import React, { Component } from 'react';
import Grid from './Grid';
import Gallery from './Gallery';
import Nav4 from './Nav4';



class Display extends Component{

    render(){
        return( <div>
            <Nav4 />
            <Gallery />
            <Grid />
        </div>
        )
    }
}

export default Display;