import React, { Component } from 'react';
import Grid from './Grid';
import Gallery from './Gallery';
import Nav4 from './Nav4';
import Story from './Story';
import Footer from './Footer';
import FooterTwo from './FooterTwo';




class Display extends Component{

    render(){
        return( <div className="displayContainer">
            <Nav4 />
            <Gallery />
            <Grid />
            <Story />
            <Footer />
            <FooterTwo />
        </div>
        )
    }
}

export default Display;