import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Main from "./components/Main";
import Detalhes from "./components/Detalhes";

function Routes (){
   return (
    <BrowserRouter>
        <Switch>
            <Route component={Detalhes} path="/detalhes/:id?" />
        </Switch>
    </BrowserRouter>
   );
};

export default Routes;