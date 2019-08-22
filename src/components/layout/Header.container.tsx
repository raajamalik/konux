import React, { Component } from 'react';
import LogoComponent from './Logo.component';
import { Container, Row, Col } from 'react-bootstrap';
import konux from '../../assets/konux.svg';

/**
 * Serves as a header for entire application. At present, it's only
 * Logo which is displayed in header. This can be used to display additional
 * information like Navigation bar in future.
 */
export default class HeaderContainer extends Component {

    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col md={"auto"}>
                            <LogoComponent src={konux}/>
                        </Col>
                        <Col xs md={2}></Col>
                        <Col xs md={"auto"}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}