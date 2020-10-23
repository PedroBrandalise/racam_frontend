
import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import './Logout.css'

import Axios from "axios";
import { Link } from 'react-router-dom';
import {i18n} from '../translate/i18n'



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
                        <Card.Title>
                            {i18n.t('youReLoggedOut')}
                        </Card.Title>
                        <Card.Text>
                            {i18n.t('loggedOutMsg1')}

                        <br/>
                        
                        <Link to='/login' > 
                        {i18n.t('loggedOutMsg2')}

                        </Link>



                        </Card.Text>

                    </Card.Body>
                </Card>


            </div>
        );
    }


}


export default Logout;

