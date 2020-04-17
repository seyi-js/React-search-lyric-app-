import React, { useEffect } from 'react';
import NavBar from './components/layout/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Index from './components/layout/Index';
import store from './store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lyrics from './components/tracks/Lyrics'
export const App =()=> {


  
    
        return (
            <React.Fragment>
                <Provider store={ store }>
                <NavBar />
                
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/lyrics/track/:id" component={Lyrics}/>
                    </Switch>
                </div>
                
                </Provider>
                











            </React.Fragment>
                
           



                 
        )
    
}

export default App
