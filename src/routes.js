import React from 'react'
import { Switch, Route} from 'react-router'

import Photos from './pages/Photos'
import Login from './pages/Login'
import RegisterCam from './pages/RegisterCam'
import RegisterUser from './pages/RegisterUser'
import Cameras from './pages/Cameras'


function Routes (){ 
    return(
        <Switch>
            <Route path= '/' exact component ={Photos} />
            <Route path ='/login' component={Login} />
            <Route path ='/cameras' component={Cameras} />
            <Route path ='/registercam' component={RegisterCam} />
            <Route path ='/registeruser' component={RegisterUser} />

        </Switch>
 

    );


}

export default Routes;