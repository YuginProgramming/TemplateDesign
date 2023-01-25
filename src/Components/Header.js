import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button 
} from 'react-bootstrap'; 

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';

import Home from '../Pages/Home';

export default class Header extends Component { 
    render () {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            Logo
                        </Navbar.Brand>
                    </Container>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Container>
                                <Nav className='mr-auto'>
                                    
                                    
                                </Nav>
                            </Container>
                            <Container>    
                                <Form>
                                    <Row>
                                     
                                        <Col>
                                            <Button variant='outline-info'>Menu</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Container>    
                        </Navbar.Collapse>    
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        
                    </Switch>
                </Router>
            </>
        );
    }
}    