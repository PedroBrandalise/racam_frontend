
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'

class Login extends Component {
    render (){
        return(
            <div>
                
                
                <Card style={{ width: '18rem' }} className="cardLogin">
                    
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
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


export default Login; 

