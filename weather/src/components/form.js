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
                            <input type='text' name='gamertag' autoComplete='off' placeholder='Enter Gamertag' />
                        </form>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Form;
