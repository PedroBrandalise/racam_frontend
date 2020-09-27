
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from "axios";



class RegisterCam extends Component {
    state = {
        name: "", 
        code: "", 
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.value)
    }
    handleSubmit  = async e=>{
        e.preventDefault();

        console.log(this.state)
        Axios({
            method: "POST",
            data: {
              name: this.state.name,
              code: this.state.code,
            },
            withCredentials: true,
            url: "http://localhost:8080/registercam",
          }).then((res) => {
            console.log(res.data)
            if (res.data.success === true){
                console.log("redirecionar")
                window.location.href = "http://localhost:3000/cameras";

            }
          });
        }


    render (){
        return(
            <div>
            <Card  className="cardLogin" style={{width:'30rem'}}>
                    
            <Card.Body>
                <Card.Title>Registrar Camera</Card.Title>
                <Card.Text>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Código</Form.Label>
                        <Form.Control type="text" placeholder="Código"  onChange={this.handleChange}  value={this.state.email} name='code' />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome"  onChange={this.handleChange} name='name'/>
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

