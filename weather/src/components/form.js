import React from 'react';
import './form.css';
import { Container, Row, Col } from 'reactstrap';


const Form = props => {
    return (
        <>
            <Container className='form-container' fluid={true} >
                <Row>
                    <Col>
                        <form onSubmit={props.loadweather}>
                            <div className='city-box'>
                                <input 
                                    className='input-city'
                                    type='text' 
                                    name='city' 
                                    autoComplete='off' 
                                    placeholder='Enter City' 
                                />
                            </div>
                            <div className='country-box'>
                                <input 
                                    className='input-country'
                                    type='text' 
                                    name='country' 
                                    autoComplete='off' 
                                    placeholder='Enter Country' 
                                />
                            </div>
                            <button className='button'>
                                Get Weather
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Form;
