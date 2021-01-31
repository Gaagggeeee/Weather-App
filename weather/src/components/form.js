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
                            <input 
                                className='input-city'
                                type='text' 
                                name='city' 
                                autoComplete='off' 
                                placeholder='Enter City' 
                            />
                            <input 
                                className='input-country'
                                type='text' 
                                name='country' 
                                autoComplete='off' 
                                placeholder='Enter Country' 
                            />
                            <button >
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
