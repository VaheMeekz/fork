import React from "react"
import { Route, Switch } from "react-router-dom";
import { pages } from "./routes";



const Pages = () => {
    return (
        <Switch>
        {
            pages.map(({id,name,path,Component})=>{
                return <Route key={id} path={path} component={Component} exact />;
            })
        }
    </Switch>
    )
}

export default Pages