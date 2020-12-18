import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './weather.css';

const Weather = props => {
    return (
        <>
            <Container className='weatherContainer'>
                <Row className='cityNameRow'>
                    <Col>
                        <p>{props.city}, {props.country}</p>
                    </Col>
                </Row>
                <Row className='tempRow'>
                    <Col>
                        <p>{props.temp_celsius}&deg;</p>
                    </Col>
                </Row>
                <Row className='maxMinRow' >
                    <Col sm='6'>
{/* first argument MAX TEMP */}
                        {maxminTemp(props.temp_max)}
                    </Col>
                    <Col sm='6'>
{/* second argument min TEMP */}
                        {maxminTemp(props.temp_min)}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Light Showers</p>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}


function maxminTemp(max, min) {
    return(
        <>
            <span>
                {max}
            </span>
            <span>
                {min}
            </span>
        </>
    );
}


export default Weather;