import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Acceso.css';

class Acceso extends Component {

    render(){
        return (
            <div className="Acceso">
                <div style={{textAlign:"center"}} className="recipes">
                    <div>
                        <SignUp/>
                    </div>
                    <div>
                        <SignIn/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Acceso;