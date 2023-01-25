import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import forestImg from '../assets/forest.jpg';
import dforestImg from '../assets/dforest.jpg';

export default class About extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ forestImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ dforestImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Dark Forest image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ forestImg }
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    </Carousel.Caption>
                </Carousel.Item>    
            </Carousel>
            
        )
    }
}