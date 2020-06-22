import React from 'react'
import { Switch, Route} from 'react-router'

import Photos from './pages/Photos'
import Login from './pages/Login'
import RegisterCam from './pages/RegisterCam'
import Cameras from './pages/Cameras'


function Routes (){ 
    return(
        <Switch>
            <Route path= '/' exact component ={Photos} />
            <Route path ='/login' component={Login} />
            <Route path ='/cameras' component={Cameras} />
            <Route path ='/register' component={RegisterCam} />
        </Switch>
 

    );


}

export default Routes;