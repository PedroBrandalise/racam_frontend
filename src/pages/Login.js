
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
import api from "../services/api"

class Login extends Component {

    state ={
        email: '',
        password: ''
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async e=>{
        e.preventDefault();

        let resp = ''
        console.log(this.state.email)

        await api
            .post('login', {
                email: this.state.email, 
                password: this.state.password
            })
            .then(response => ( resp =response))

            console.log(resp)
    }

    render (){
        return(
            <div>
                
                
                <Card style={{ width: '18rem' }} className="cardLogin">
                    
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" name='email' onChange={this.handleChange}  value={this.state.email}/>
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" name='password' onChange={this.handleChange}  value={this.state.password} />
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

