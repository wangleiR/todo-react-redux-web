import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button} from "react-bootstrap";
import '../style.scss';
import {authenticationReducer} from "../../../dataStore/authenticationReducer";

const authenticationServer = '/login';

export default class Login extends React.Component{

    constructor(props){
        super(props);
    }

    createUserSession = (username,password) => {
        return fetch(authenticationServer,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"name":username,"password":password})
        }).then(response => {
            if (response.ok){
                return response.json();
            }
        }).then( data  => {
          if (data !== undefined) {
              this.props.onLogin();
          }
        }).catch(error => {
            console.error('Error:', error)
        });
    };

    render() {
      const { logged } = this.props;
        return (
            <div>
                {
                    !logged &&
                    <div className="static-modal">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Login</Modal.Title>
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
                                  this.createUserSession(this.username.value,this.password.value);
                                }}>Login</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                }
                {
                    logged && <Redirect to="/home" />
                }
            </div>
        );
    }

}
