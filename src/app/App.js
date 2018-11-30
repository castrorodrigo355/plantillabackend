import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Acceso from './Acceso';
import Home from './Home';
import './App.css';

class App extends Component {
    render() {
        let token = localStorage.getItem('token');
        return (
            <div>
                <BrowserRouter>
                    {
                        token ?
                            <div>
                                <Route exact path={'/'} component={Home} />
                            </div>
                            :
                            <div>
                                <Acceso/>
                            </div>
                    }
                </BrowserRouter>
            </div>
        );
    }
}

export default App;