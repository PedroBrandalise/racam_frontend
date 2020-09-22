import React, { Component} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegisterUser.css'


class RegisterUser extends Component {
    
    state ={
        password : "",
        repeatPassword : ""
    }
    
    handleRepeatPassword = e => {
        let repeat = e.target.value
        let x = document.getElementById ("msgSenhasDiferentes");

        let inputField = document.getElementById ("fieldRepeat")
        // let x= React.findDOMNode(this.refs.msgSenhasDiferentes)
        if (this.state.password !== repeat){
            // alert("As senhas não são iguais\n"+x.style.display )
            x.style.display = "block"
            inputField.style.borderBottom = "2px solid #ef5350"

        }else{
            x.style.display = "none"
            inputField.style.borderBottom = ""
        }



    }

    handlePassword = e => {
        this.setState({password: e.target.value})

    }
    
    
    render (){
        return(
            <div>
            <Card  className="cardLogin" style={{width:'30rem'}}>
                    
            <Card.Body>
                <Card.Title>Registrar Usuario</Card.Title>
                <Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Nome" onChange = {this.handlePassword}/>    
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword" id='fieldRepeat'>
                        <Form.Label>Repetir Senha</Form.Label>
                        <Form.Control type="password" placeholder="Nome" onBlur={this.handleRepeatPassword} />
                    </Form.Group>
                    <div id='msgSenhasDiferentes' >
                        <span id = ""> As senhas não são iguais! </span>
                        
                        
                    </div>
                    
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                    </Form>
                
                </Card.Text>
                
            </Card.Body>
        </Card>
                
            </div>
        );
    }


}


export default RegisterUser; 

