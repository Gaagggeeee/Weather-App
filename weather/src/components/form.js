import React from 'react';
import './form.css';
import { Container, Row, Col } from 'reactstrap';


const Form = props => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={props.loadStats}>
                            <input 
                                type='text' 
                                name='city' 
                                autoComplete='off' 
                                placeholder='Enter City' 
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Form;
