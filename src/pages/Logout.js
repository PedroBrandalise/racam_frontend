
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import './Logout.css'

import Axios from "axios";
import { Link } from 'react-router-dom';



class Logout extends Component {

    state ={
        
    }
    async componentDidMount(){
        Axios({
            method: "POST",
            withCredentials: true,
            url: "http://localhost:8080/auth/logout",
          }).then((res) => {
                        
            if(res.data.success){
                console.log('deslogou')
                

            }else{
                console.log('nao deslogou')

               


            }
          });


    }
   
    render (){
        return(
            <div>
            
                <Card className="cardLogout">

                    <Card.Body>
                        <Card.Title>Você efetuou logout</Card.Title>
                        <Card.Text>
                        Para acessar as informações no sistema RaCam você precisa estar logado.
                        <br/>
                        
                        <Link to='/login' > Efetuar login</Link>



                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>
        );
    }


}


export default Logout;

