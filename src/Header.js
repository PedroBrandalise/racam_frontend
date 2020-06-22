
import React, { Component} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    render (){
        return(

            <div className='headerDiv'>
            
                    <div className="logo">
                    RaCam
                    </div>
            
                    <div className= 'headerRight'>
                    <Link to={'/login'} activeClassName="active">
                    Login
                    </Link>
                    
                    
                    </div>
                    <link href="https://allfont.net/allfont.css?fonts=agency-fb" rel="stylesheet" type="text/css" />
            
            </div>
        );
    }


}


export default Header; 

