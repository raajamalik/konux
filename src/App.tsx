import * as React from 'react';
import './App.css';

import TrainFrequencyComponent from './pages/train-frequency/components/TrainFrequency.component';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComponent from './components/layout/Header.container';
import FooterComponent from './components/layout/Footer.container';
import { Route } from 'react-router-dom';
import AddFrequencyComponent from './pages/train-frequency/components/AddFrequency.component';

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Container> 
        <Row>
          <Col sm={12}>
            <HeaderComponent/>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Route exact={true} path="/" component={TrainFrequencyComponent}/>
            <Route path="/addFrequency" component={AddFrequencyComponent}/>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <FooterComponent/>
          </Col>
        </Row>
      </Container>
      
      
    </>
  );
};

export default App;


