

import { Switch } from "react-router-dom";


import PrivateRoute from "../../hoc/PrivateRoute";
import UnPrivateRoute from "../../hoc/UnPrivateRoute";


import IndexPage from "../Home/HomePage";
import CurrentProjects from "../CurrentProjects/CurrentProjects";
import PastProjects from "../PastProjects/PastProjects";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import DashboardPage from "../Dashboard/DashboardPage";
import CreateUserPage from "../CreateUser/CreateUserPage";
import ChatroomPage from "../Chat/ChatPage";


function Router(){
    return(
        <div>
            <Switch>

                <UnPrivateRoute exact path="/" component={IndexPage} />
                <UnPrivateRoute exact path="/PastProject" component={PastProjects}/>
                <UnPrivateRoute exact path="/CurrentProject" component={CurrentProjects}/>
                <UnPrivateRoute exact path="/WhatWeDo" component={WhatWeDo}/>
                <UnPrivateRoute exact path="/go-n-build/login" component={LoginPage}  />
                <UnPrivateRoute exact path="/go-n-build/login" component={LoginPage}  />
                <UnPrivateRoute exact path="/go-n-build/register" component={RegisterPage}  />
                <PrivateRoute exact path="/go-n-build/dashboard" roles={["admin","user"]} component={DashboardPage}  />
                <PrivateRoute exact path="/go-n-build/createuser" roles={["admin"]} component={CreateUserPage}  /> 
                <PrivateRoute path="/chatroom/:id" roles={["admin","user"]} component={ChatroomPage}/>
             
            </Switch>
        </div>
    )
}

export default Router;