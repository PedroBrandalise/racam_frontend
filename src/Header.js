
import React, { Component} from 'react'
import './Header.css'
// import { Link } from 'react-router-dom';
import api from './services/api';

class Header extends Component {

    state ={
        name: "",
    }

    loginOrName =  e =>{
        console.log('oi')
        if(this.state.name ===''){
            console.log("login")
            
            return <div>Login</div>;
        }else{
            console.log(this.state)
            return <div> {this.state.name} </div>
            
        }
    }

    getName =  async e =>{
        
            api.get('/auth/profile')
            .then(function(response){
                console.log(response.data)
                if(response.data.exists!== false){

                    this.setState({name:response.data.name})
                    
                }

            })
            
        
            
        }
    

    render (){
         this.getName();

        return(

            <div className='headerDiv'>
            
                    <div className="logo">
                    RaCam
                    </div>
            
                    <div className= 'headerRight'>
                    
                    {this.loginOrName()}
                    

                    
                    
                    </div>
                    <link href="https://allfont.net/allfont.css?fonts=agency-fb" rel="stylesheet" type="text/css" />
            
            </div>
        );
    }


}


export default Header; 

