import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Acceso.css';

class Acceso extends Component {

    render(){
        return (
            <div className="Acceso">
                {/* <div id="Accordion" role="tablist" aria-multiselectable="true" className="border" style={{margin:"10px", padding:"5px"}}>
                    
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="HeadingOne">
                            <h4 className="panel-title">
                                <div data-toggle="collapse" data-parent="#Accordion" href="#CollapseOne" aria-expanded="true" aria-controls="CollapseOne">
                                Registrarse
                                </div>
                            </h4>
                        </div>

                        <div id="CollapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="HeadingOne">
                            <SignUp/>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="HeadingTwo">
                            <h4 className="panel-title">
                                <div className="collapsed" data-toggle="collapse" data-parent="#Accordion" href="#CollapseTwo" aria-expanded="false" aria-controls="CollapseTwo">
                                Iniciar sesion
                                </div>
                            </h4>
                        </div>

                        <div id="CollapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="HeadingTwo">
                        <SignIn/>
                        </div>
                    </div>

                </div> */}
                
                <div className="accordion" id="accordionExample" role="tablist" aria-multiselectable="true" style={{margin:"10px", padding:"5px"}}>

                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Iniciar Sesion
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                            <SignIn/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Registrarse
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                            <SignUp/>
                            </div>
                        </div>
                    </div>

                </div>
                    
                {/* <div style={{textAlign:"center"}} className="recipes">
                    <div>
                        <SignUp/>
                    </div>
                    <div>
                        <SignIn/>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Acceso;