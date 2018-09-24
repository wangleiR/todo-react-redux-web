import React from 'react';
import { Modal, Button} from "react-bootstrap";
import '../style.scss';
import {Redirect} from "react-router-dom";

export default class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            registerFlag : false
        };
    }

    register = (username,password) => {
        return fetch("/register",{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"name":username,"password":password})
        }).then(response => {
            if (response.ok){
                this.setState({
                    registerFlag : true,
                });
                return response.json();
            }
        }).catch(error => {
            console.error('Error:', error)
        });
    };

    render() {
        return (
            <div>
                {
                    !this.state.registerFlag &&
                   <div className="static-modal">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Register</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <div>
                                    <label className="login-label" htmlFor="username">Username:</label>
                                    <input ref={(ref) => this.username = ref} id="username" />
                                </div>
                                <div>
                                    <label className="login-label" htmlFor="password">Password:</label>
                                    <input ref={(ref) => this.password = ref} type="password" id="password" />
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button bsStyle="primary" onClick={() => {
                                  this.register(this.username.value,this.password.value);
                                }}>Register</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                   </div>
                }
                {
                    this.state.registerFlag && <Redirect to="/" />
                }

            </div>
        );
    }

}
