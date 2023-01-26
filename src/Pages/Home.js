import React, {Component} from "react";
import { Button, Card, CardGroup, Container, Nav } from "react-bootstrap";
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import menImg from '../assets/men.png';
import okOne from '../assets/okOne.png';
import noteOne from '../assets/noteOne.png';
import appTwo from '../assets/appTwo.png';
import appleThree from '../assets/appleThree.png';

export default class Home extends Component {
    render () {
        return (
            <>
                <Container className="container bg-dark bg-gradient text-white"> 
                    <h2 className="text-center m-4">I’m a digital designer Julian Mack</h2>
                    <CardGroup bg='dark' >
                        <Card className=" text='primary'">
                            
                        <Card.Body className="container bg-dark">
                            <Card.Title className="text-white">digital designer</Card.Title>
                            <Card.Text className="text-white container bg-dark text-dark bg-opacity-10 backgroundColor grey">
                            <p>Date of Birth:     Aug 25, 1988</p>
                            <p>Address:                Rosia Road 55, Gibraltar, UK</p>
                            <p>E-mail:                  julian@mail.dot</p>
                            <p>Phone:                 +38055500303</p>
                            </Card.Text>
                            <Button className="btn btn-warning">Download CV</Button>
                        </Card.Body>
                        </Card>

                        <Card className="bg-dark m-3">
                            <Card.Img
                            variant="top"
                            src={menImg}>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </CardGroup>    
                </Container>

                <Container className="container bg-dark bg-gradient text-white"> 
                    <h2 className="text-center m-4">Portfolio</h2>
                    <CardGroup bg='dark' >
                        <Card className="bg-dark m-3">

                            <Card.Img
                            variant="top"
                            src={noteOne}>
                            </Card.Img>
                
                        </Card>

                        <Card className="bg-dark m-3">
                            <Card.Img
                            variant="top"
                            src={appTwo}>
                            </Card.Img>

                        </Card>

                        <Card className="bg-dark m-3">
                            <Card.Img
                            variant="top"
                            src={appleThree}>
                            </Card.Img>

                        </Card>
                    </CardGroup>    
                </Container>                
                
                <Container>
                <Card className="bg-dark m-3">
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey='first'>
                                    <img src={okOne}></img>
                                    <Card.Text className="text-white container bg-dark text-dark bg-opacity-10 backgroundColor grey">
                                    <p>
                                    <p>Build your website</p>
                                        in record time
                                        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                                    </p>
                                    </Card.Text>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </Card>
                </Container>
            </>    
        )
    }
}