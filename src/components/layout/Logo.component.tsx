import React, { Component } from 'react';

interface Props{
    src:any
}

/**
 * Displays logo of the applicaiton. Takes an input for the source 
 * of the image of logo.
 */
export default class LogoComponent extends Component<Props> {

    /**<img 
    src={this.props.src}  
    className="logo"
    alt="KONUX Logo"/> */
    render() {
        return (
            <h5>A case study with React, Redux, TypeScript, D3, Cypress...</h5>
            
        )
    }
}