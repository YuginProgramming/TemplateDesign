import React, {Component} from "react";
import { Button, Card, CardGroup, Container, Nav } from "react-bootstrap";
import CarouselBox from '../Components/CarouselBox';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default class Home extends Component {
    render () {
        return (
            <>
                {/* <CarouselBox></CarouselBox> */}
                <Container className="p-3 mb-2 bg-secondary bg-gradient text-white rounded-5"> 
                    <h2 className="text-center m-4">I’m a digital designer Julian Mack</h2>
                    <CardGroup bg='dark' >
                        <Card className="m-3" border="success" text='primary'>
                            <Card.Img
                            variant="top"
                            src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600'>
                            </Card.Img>
                        <Card.Body bg='dark'>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        </Card>
                        
                        <Card className="m-3">
                            <Card.Img
                            variant="top"
                            src='https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600'>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
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
                                    <img src='https://images04.nicepage.com/feature/511177/ru/create-any-website-with-powerful-website-builder-konstruktor-saytov.jpg'></img>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur.
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