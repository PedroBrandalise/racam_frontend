
import React, { Component} from 'react'
import './Header.css'
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {i18n} from './translate/i18n'
 
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
                    {i18n.t('register')}
                </Link>
                
                <Link id='rightnavBarItems' to={'/login'}>
                    {i18n.t('login')} 
                </Link>
                <select onChange={this.changeLang} >
                            <option>{i18n.t('lang')}</option>
                            <option value='pt-BR' >Português</option>
                            <option value = 'en-US'>English</option>

                        </select>
                
             </div>);
        }else{
            // console.log(this.state)
            return (
                <div>
                    <div id='rightnavBarItemsStatic'> {i18n.t('welcome')} {this.state.name}! </div>
                    <Link id='rightnavBarItems' to={'/'}>
                        {i18n.t('photos')}
                    </Link>
                    <Link id='rightnavBarItems' to={'/cameras'}>
                        {i18n.t('cameras')}

                    </Link>
                    <Link id='rightnavBarItems' to={'/logout'}>
                        {i18n.t('logout')}

                    </Link>
                    <select onChange={this.changeLang} >
                            <option>{i18n.t('lang')}</option>
                            <option value='pt-BR' >Português</option>
                            <option value = 'en-US'>English</option>

                        </select>
                   

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

        changeLang = e=>{
            // alert(e.target.value)
            localStorage.setItem('i18nextLng', e.target.value )
            window.location = window.location

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

