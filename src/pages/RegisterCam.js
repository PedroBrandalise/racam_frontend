
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class RegisterCam extends Component {
    render (){
        return(
            <div>
            <Card  className="cardLogin" style={{width:'30rem'}}>
                    
            <Card.Body>
                <Card.Title>Registrar Camera</Card.Title>
                <Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Código</Form.Label>
                        <Form.Control type="text" placeholder="Código" />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" />
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    </Form>
                
                </Card.Text>
                
            </Card.Body>
        </Card>
                
            </div>
        );
    }


}


export default RegisterCam; 

