import React from 'react';
import {Switch, Route} from 'react-router-dom';
import series from './series';
import form from '../form/form';
import Single from './Single';


const Main=props=>{
    return(
        <Switch>
           <Route exact path="/" component={series}/>
           <Route path="/form" component={form}/>
           <Route path="/series/:id" component={Single}/> 
           {/* series/:id will give us id of series and it will be shown in single container */}
        </Switch>
    )
}

export default Main;