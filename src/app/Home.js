import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import './Acceso.css';

class Home extends Component {

    logout(){
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    render() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const id = decoded.userId;
        const email = decoded.email;
        return (
            <div className="Acceso">
                <button type="submit" onClick={this.logout.bind(this)} className="badge badge-pill badge-danger">Salir</button>
                {/* {id} - {email}
                
                <div className="card border m-2 bg-transparent" style={{maxWidth: "18rem"}}>
                    <div className="card-header">

                    </div>
                    <div className="card-body">
                        <input type="text" className="bg-transparent border"></input>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Home;