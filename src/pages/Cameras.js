
import React, { Component} from 'react'
import Table from 'react-bootstrap/Table'
// import {FcHighBattery} from 'react-icons/fc'
import {FcLowBattery} from 'react-icons/fc'
import {MdAddCircle} from 'react-icons/md'

import { MdInsertPhoto } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'


class Cameras extends Component {
    state = {
        cameras: []
    }
    async componentDidMount(){
    // getCameras = async e=>{
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8080/cameras",
          }).then((res) => {
            
            // let cameras = res.data.cameras
            this.setState({cameras: res.data.cameras})
            // return(cameras)
            console.log(this.state.cameras);


            // if(res.data.loged){
            //     this.setState({name:res.data.user.name})

            // }else{
            //     console.log('au')
            // }
          });

    }

    render (){
        // let cams = this.getCameras()
        return(
            <div>
                <h1> Cameras</h1>
                {this.cams}
                <Table  bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Bateria</th>
                    <th>Nº de fotos</th>
                    </tr>
                </thead>

                <tbody>
                {this.state.cameras.map(cam =>(
                    <tr>
                        <td>{cam.code}</td>
                        <td>{cam.name}</td>
                        <td>{Math.round(Math.random() * (100 - 1) + 1)}  < FcLowBattery /></td>
                        <td>{Math.round(Math.random() * (100 - 1) + 1)}  < MdInsertPhoto /></td>
                    </tr>
                   
                ))}
                    
                   
                </tbody>
                </Table>

                <Button > Adicionar camera  <MdAddCircle/> </Button>
            </div>
        );
    }


}


export default Cameras; 

