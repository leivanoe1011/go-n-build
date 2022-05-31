

import { Switch, Route } from "react-router-dom";


import PrivateRoute from "../hoc/PrivateRoute";
import UnPrivateRoute from "../hoc/UnPrivateRoute";
import IndexPage from "./Home/HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import DashboardPage from "./DashboardPage";
import CreateUserPage from "./CreateUserPage";
// import ChatroomPage from "./ChatPage";


function Router(){
    return(
        <div>
            <Switch>
                <Route exact path="/go-n-build/" component={IndexPage}  />
                <Route exact path="/go-n-build/Home" component={IndexPage}  />
                <UnPrivateRoute exact path="/go-n-build/login" component={LoginPage}  />
                <UnPrivateRoute exact path="/go-n-build/register" component={RegisterPage}  />
                <PrivateRoute exact path="/go-n-build/dashboard" roles={["admin","user"]} component={DashboardPage}  />
                <PrivateRoute exact path="/go-n-build/createuser" roles={["admin"]} component={CreateUserPage}  />
                {/* The socket lives within the Auth Context */}
                {/* <PrivateRoute path="/chatroom/:id" roles={["admin","user"]} component={ChatroomPage}/>  */}
            </Switch>
        </div>
    )
}

export default Router;