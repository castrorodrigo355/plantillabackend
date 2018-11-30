import React, { Component } from 'react';
import './App.css';

class SignIn extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
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

    signin(e){
        e.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(result => result.json())
            .then(object => {
                if(object.token){
                    //console.log(object.token);
                    localStorage.setItem('token', object.token);
                    window.location.href = "/";
                }else{
                    console.log({Error: "Token not found"})
                    console.log(object.token)
                    alert("Error de logueo")
                }
            })
    };

    render(){
        return (
            <div>
                <form style={{textAlign:"center"}} onSubmit={this.signin.bind(this)} className="container">
                    <div className="form-group">
                        <h4><span className="badge badge-pill badge-info">Ingresar</span></h4>
                    </div>
                    <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email" 
                                onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="Password" 
                                onChange={this.handleInputChange.bind(this)} value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary bg-info">OK</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;