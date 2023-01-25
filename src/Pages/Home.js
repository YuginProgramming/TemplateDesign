import React, {Component} from "react";
import { Button, Card, CardGroup, Container, Nav } from "react-bootstrap";
import CarouselBox from '../Components/CarouselBox';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import menImg from '../assets/men.png';
import ok from '../assets/ok.png';

export default class Home extends Component {
    render () {
        return (
            <>
                {/* <CarouselBox></CarouselBox> */}
                <Container className="p-3 mb-2 bg-secondary bg-gradient text-white rounded-5"> 
                    <h2 className="text-center m-4">I’m a digital designer Julian Mack</h2>
                    <CardGroup bg='dark' >
                        <Card className="m-3" border="success" text='primary'>
                            
                        <Card.Body bg='dark'>
                            <Card.Title>digital designer</Card.Title>
                            <Card.Text className="bg-success p-2 text-dark bg-opacity-10">
                            <p>Date of Birth:     Aug 25, 1988</p>
                            <p>Address:                Rosia Road 55, Gibraltar, UK</p>
                            <p>E-mail:                  julian@mail.dot</p>
                            <p>Phone:                 +38055500303</p>
                            </Card.Text>
                            <Button className="btn btn-warning">Download CV</Button>
                        </Card.Body>
                        </Card>

                        <Card className="m-3">
                            <Card.Img
                            variant="top"
                            src={menImg}>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </CardGroup>    
                </Container>
                
                <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey='first'>
                                    <img src={ok}></img>
                                    <p>
                                    <p>Build your website</p>
                                        in record time
                                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                                    </p>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            
                </Container>
            </>    
        )
    }
}