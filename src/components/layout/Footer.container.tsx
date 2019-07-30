import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorComponent from './Author.component';

/**
 * Serves as the footer component for entire application. 
 * At present, its only Author Component which is being used to 
 * display Author information plus some summary of the technologies
 * used for this case study. 
 */
export default class FooterContainer extends Component {
    render(){
        return (
            <Container>
            <Row>
                <Col></Col>
                <Col xs md={"auto"}><AuthorComponent /></Col>
                <Col></Col>
            </Row>
        </Container>
        )
    }
}