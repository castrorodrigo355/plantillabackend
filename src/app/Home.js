import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import './Acceso.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            usuarios: []
        };
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        const localhostUsuarios = "/usuarios";
        const herokuUsuarios = "https://plantillabackend.herokuapp.com/usuarios";
        fetch(herokuUsuarios, {
            method: 'GET',
            headers: {
                token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(usuarios => {
            this.setState({usuarios})
        })
        .catch(err => console.log(err));
    }

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
                Bienvenido: {email}
                <button type="submit" onClick={this.logout.bind(this)} className="badge badge-pill badge-danger">Salir</button>
                <ul>
                    {
                        this.state.usuarios && this.state.usuarios.map((usuario, i) => {
                            return(
                                <li key={i}>
                                    {usuario.email}
                                </li>
                            )
                        })
                    }
                </ul>
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