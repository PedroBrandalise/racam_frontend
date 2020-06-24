
import React, { Component} from 'react'
import Table from 'react-bootstrap/Table'
import {FcHighBattery} from 'react-icons/fc'
import {FcLowBattery} from 'react-icons/fc'
import {MdAddCircle} from 'react-icons/md'

import { MdInsertPhoto } from 'react-icons/md'
import Button from 'react-bootstrap/Button'


class Cameras extends Component {
    render (){
        return(
            <div>
                <h1> Cameras</h1>
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
                    <tr>
                    <td>1256</td>
                    <td>Floresta</td>
                    <td>22%   < FcLowBattery /></td>
                    <td>14  < MdInsertPhoto /></td>
                    </tr>
                    
                    <tr>
                    <td>1254</td>
                    <td>Galpâo</td>
                    <td>86%  < FcHighBattery /></td>
                    <td>3 <MdInsertPhoto/> </td>
                    </tr>
                   
                </tbody>
                </Table>

                <Button > Adicionar camera  <MdAddCircle/> </Button>
            </div>
        );
    }


}


export default Cameras; 

