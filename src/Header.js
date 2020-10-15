
import React, { Component} from 'react'
import './Header.css'
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class Header extends Component {

    state ={
        name: "",
    }

    loginOrName =  e =>{
        // console.log('oi')
        if(this.state.name ===''){
            // console.log("login")
            
            return (
            <div >
                <Link  id='rightnavBarItems' to={'/registeruser'}>
                    Registrar 
                </Link>
                
                <Link id='rightnavBarItems' to={'/login'}>
                    Logar 
                </Link>
             </div>);
        }else{
            // console.log(this.state)
            return (
                <div>
                    <div id='rightnavBarItemsStatic'> Seja bem vindo(a) {this.state.name}! </div>
                    <Link id='rightnavBarItems' to={'/'}>
                    Fotos
                    </Link>
                    <Link id='rightnavBarItems' to={'/cameras'}>
                    Câmeras 
                    </Link>
                    <Link id='rightnavBarItems' to={'/logout'}>
                    Logout
                    </Link>

                </div>

            )
            
        }
    }

    async componentDidMount(){
        
            Axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:8080/auth/profile",
              }).then((res) => {
                // setData(res.data);
                console.log(res.data);
                if(res.data.loged){
                    this.setState({name:res.data.user.name})

                }else{
                    // console.log('au')
                }
              });
            
        
            
        }
    

    render (){
        //  this.getName();
        // console.log('reqw')
         
        //  const nameLog = this.loginOrName()

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

