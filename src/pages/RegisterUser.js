import React, { Component} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegisterUser.css';
import api from '../services/api';

class RegisterUser extends Component {
    
    state ={
        password : "",
        repeatPassword : ""
    }
    
    handleRepeatPassword = e => {
        let repeat = e.target.value
        this.setState({repeatPassword: e.target.value})
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

    handleSubmit  = async e=>{
        if(this.state.password!==this.state.repeatPassword){
            alert("As senhas são diferentes! Corrija para prosseguir")
        }else{

            
            e.preventDefault();
            
            
            let user ={
                email:"",
                password:'',
                name:'',

            };

            user.email = document.getElementById ("email").value;
            user.password = document.getElementById ("password").value;
            user.name = document.getElementById ("name").value;



            console.log(user)
            
            api
            // .post('login', 
            // `{"email": "${this.state.email}",
            //   "password": "${this.state.password}"
            // }`)
            .post('user', user)
            .then(function(response){
                console.log(response.data)
                // console.log('salvo com sucesso')
                 if(response.data.success){ 
                     window.location.href = "http://localhost:3000/";

                 }else{
                     alert("Email já utilizado, tente novamente com outro email");
                 }
            });
            
        }
    }
        
        
    render (){
        return(
            <div>
            <Card  className="cardLogin" style={{width:'30rem'}}>
                    
            <Card.Body>
                <Card.Title>Registrar Usuario</Card.Title>
                <Card.Text>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Email" id= "email"/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" id = 'name'/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Nome" onChange = {this.handlePassword}  id='password'/>    
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword" id='fieldRepeat'>
                        <Form.Label>Repetir Senha</Form.Label>
                        <Form.Control type="password" placeholder="Nome" onChange={this.handleRepeatPassword} />
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

