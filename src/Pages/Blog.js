import React, {Component} from "react";
import { Container, ListGroup, Card} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';

export default class Blog extends Component {
    render () {
        return (
            <Container>
                <Row className="parent">
                    <Col md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src='https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg'></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src='https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg'></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src='https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg'></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src='https://i.ytimg.com/vi/jS4aFq5-91M/maxresdefault.jpg'></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col md='3'>
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Card className="mt-3" border="success" text='primary' bg='light'>
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}