// const { Component } = require("react")

import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import './Photos.css'
import Axios from 'axios'

class Photos extends Component {
    state = {
        photos: [],
        loged:''
    }
    async isLoged(){
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/auth/profile",
          }).then((res) => {
            // setData(res.data);
            console.log('oioioi')
            console.log(res.data);
            if(res.data.loged){
                console.log('loged')
                this.setState({loged:true})
                

            }else{
                console.log('not loged')
                
                this.setState({loged:false})
        setTimeout(function(){ window.location.href = "http://localhost:3000/login"; }, 1000);


            }
          });

    }

    async componentDidMount(){
        this.isLoged()
        console.log('----')
        console.log(this.state)
        if  (!this.state.loged){
            console.log('redirecionar para login')
        }

        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/photos",
          }).then((res) => {
            
            this.setState({photos: res.data})
            // console.log(this.state.photos)
            // if(res.data.loged){

            // }else{
            //     console.log('au')
            // }
          });
    }

    // setTimeout(function(){ window.location.href = "http://localhost:3000/"; }, 1000);

    render (){
        return(
            <div>

                {this.state.photos.map(photo =>(
                    <div> 
                    <Card className='cardPhoto' >
                        <Card.Img className='cardImg' src={"http://localhost:8080/files/"+photo.url_photo}/>

                        <Card.Text className='cardText'>
                        { 
                            //Camera:  <br/> }
                        }
                        Hora: {Date(photo.hour)}
                        </Card.Text>
                    </Card>
                    <br/>
                    </div>
                    
                ))}
                
            </div>
        );
    }


}


export default Photos; 

