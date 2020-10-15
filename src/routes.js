import React from 'react'
import { Switch, Route} from 'react-router'

import Photos from './pages/Photos'
import Login from './pages/Login'
import RegisterCam from './pages/RegisterCam'
import RegisterUser from './pages/RegisterUser'
import Cameras from './pages/Cameras'
import Test from './pages/Test'
import Logout from './pages/Logout'




function Routes (){ 
    return(
        <Switch>
            <Route path= '/' exact component ={Photos} />
            <Route path ='/login' component={Login} />
            <Route path ='/cameras' component={Cameras} />
            <Route path ='/registercam' component={RegisterCam} />
            <Route path ='/registeruser' component={RegisterUser} />
            <Route path ='/test' component={Test} />
            <Route path ='/logout' component={Logout} />



        </Switch>
 

    );


}

export default Routes;