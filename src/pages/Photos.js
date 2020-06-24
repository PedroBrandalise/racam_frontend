// const { Component } = require("react")

import React, { Component} from 'react'
import Card from 'react-bootstrap/Card'
import './Photos.css'

class Photos extends Component {
    render (){
        return(
            <div>
                <Card className='cardPhoto' >
                <Card.Img className='cardImg' src="https://tudorondonia.com/uploads/23-10-19-fwg0kkrl6u750v5.jpg "/>
                <Card.Text className='cardText'>
                Camera: Floresta (#1345) <br/>
                Hora: 23:30
                </Card.Text>
                
                </Card>
                <br/>

                <Card className='cardPhoto' >
                <Card.Img className='cardImg' src="https://tudorondonia.com/uploads/23-10-19-fwg0kkrl6u750v5.jpg "/>
                <Card.Text className='cardText'>
                Camera: Floresta (#1345) <br/>
                Hora: 23:30
                </Card.Text>
                
                </Card>
            </div>
        );
    }


}


export default Photos; 

