
import React, { Component} from 'react'


import './Login.css'
import api from "../services/api"

class Test extends Component {

    
    test = e =>{
        console.log('user:')
        api.get('/auth/profile').then(function(response){
            console.log(response)
        })
    }

 
    render (){
        this.test()
        return(
            <div></div>
        );
    }


}


export default Test;

