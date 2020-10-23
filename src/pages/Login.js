
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
// import api from "../services/api"
import Axios from "axios";
import {i18n} from '../translate/i18n'



class Login extends Component {

    state ={
        email: '',
        password: '', 
        // responseState: ''
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

   handleSubmit  = async e=>{
        e.preventDefault();

        console.log(this.state)
        Axios({
            method: "POST",
            data: {
              email: this.state.email,
              password: this.state.password,
            },
            withCredentials: true,
            url: "http://localhost:8080/login",
          }).then((res) => {
            console.log(res.data)
            if (res.data.success === true){
                console.log("redirecionar")
                let msgLogin =document.getElementById('msgLogin')
                msgLogin.style.display = "block";
                
                setTimeout(function(){ window.location.href = "http://localhost:3000/"; }, 1000);
                

            }
          })


        // api
        //     .post('login', this.state)
        //     .then(function(response){
        //         console.log(response)
        //         console.log('salvo com sucesso')
        //         if(response.data.success){

                    
        //             // window.location.href = "http://localhost:3000/";
                
        //         }else{
        //             alert("erro");
        //         }

            //   });
              

            // console.log(resposta)

    }

    render (){
        return(
            <div>


                <Card style={{ width: '18rem' }} className="cardLogin">

                    <Card.Body>
                        <Card.Title> {i18n.t('login')} </Card.Title>
                        <Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>
                                    {i18n.t('email')}
                                </Form.Label>
                                    
                                <Form.Control type="email" placeholder={i18n.t('email')} name='email' onChange={this.handleChange}  value={this.state.email}/>

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>
                                    {i18n.t('password')}
                                </Form.Label>
                                <Form.Control type="password" placeholder={i18n.t('password')} name='password' onChange={this.handleChange}  value={this.state.password} />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                            {i18n.t('login')}
                            </Button>
                            </Form>
                            <div id="msgLogin"> {i18n.t('youReLogged')}</div>

                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>
        );
    }


}


export default Login;

