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
        console.log(this.state);
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(result => result.json())
            .then(object => {
                console.log(object);
                // localStorage.setItem('token', object.token);
                // window.location.href = "/";
            })
    };

    render(){
        return (
            <div>
                <form style={{textAlign:"center"}} onSubmit={this.signup.bind(this)} className="container">
                    <div className="form-group">
                        <h4><span className="badge badge-pill badge-info">Registrarse</span></h4>
                    </div>
                    <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email" 
                                onChange={this.handleInputChange.bind(this)} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="username" className="form-control" placeholder="Username" 
                                onChange={this.handleInputChange.bind(this)} value={this.state.username}/>
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

export default SignUp;