// const { Component } = require("react")

import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import './Photos.css'
import Axios from 'axios'

class Photos extends Component {
    state = {
        photos: [],
    }
    async componentDidMount(){
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/photos",
          }).then((res) => {
            
            this.setState({photos: res.data})
            console.log(this.state.photos)
            // if(res.data.loged){

            // }else{
            //     console.log('au')
            // }
          });
    }

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

