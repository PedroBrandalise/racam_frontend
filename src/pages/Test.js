
import React, { Component} from 'react'


import './Login.css'
import api from "../services/api"

class Test extends Component {

    
    test = e =>{
        console.log('user:')

        // api.get('/user/show/:name', { withCredentials: true }).then(function(response){
        //     console.log(response)
        // })

        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080//auth/profile",
          }).then((res) => {
            setData(res.data);
            console.log(res.data);
          });
    }

 
    render (){
        this.test()
        return(
            <div></div>
        );
    }


}


export default Test;

