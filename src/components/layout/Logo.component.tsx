import React, { Component } from 'react';

interface Props{
    src:any
}

/**
 * Displays logo of the applicaiton. Takes an input for the source 
 * of the image of logo.
 */
export default class LogoComponent extends Component<Props> {

    render() {
        return (
            
                <img 
                src={this.props.src}  
                className="logo"
                alt="KONUX Logo"/>
            
        )
    }
}