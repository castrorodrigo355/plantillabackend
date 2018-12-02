import React, { Component } from 'react';
import './App.css';

class SignUp extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    signup(e){
        e.preventDefault();
        //console.log(this.state);
        const localhostSignUp = "http://localhost:3000/signup";
        const herokuSignUp = "https://plantillabackend.herokuapp.com/signup";
        fetch(herokuSignUp, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(result => result.json())
            .then(object => {
                this.setState({
                    email: '',
                    username: '',
                    password: ''
                })
                if(object.message === "Created user successfully"){
                    alert("Usuario creado con exito !!!")
                } else {
                    alert("Vuelva a ingresar sus datos por favor.")
                }
                // localStorage.setItem('token', object.token);
                // window.location.href = "/";
            })
    };

    render(){
        return (
            <div className="container">
                <div className="card border m-2 bg-transparent">
                    <div className="card-body">
                        <form style={{textAlign:"center"}} onSubmit={this.signup.bind(this)}>
                            <div className="form-group">
                                <h4><span className="badge badge-pill badge-info">Registrarse</span></h4>
                            </div>
                            <div className="form-group">
                                    <input type="email" name="email" className="form-control bg-transparent" placeholder="Email" 
                                        onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="username" className="form-control bg-transparent" placeholder="Username" 
                                        onChange={this.handleInputChange.bind(this)} value={this.state.username}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control bg-transparent" placeholder="Password" 
                                        onChange={this.handleInputChange.bind(this)} value={this.state.password}/>
                            </div>
                            <button type="submit" className="badge badge-pill badge-info">OK</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SignUp;