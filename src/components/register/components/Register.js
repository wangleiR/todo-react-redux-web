import React from 'react';
import { Modal, Button} from "react-bootstrap";
import '../style.scss';
import {Redirect} from "react-router-dom";
import {
    register
} from '../../../restfulAPI/API';

export default class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            registerFlag : false
        };
    }

    onRegister = () => {
        register(this.username.value,this.password.value);
        this.setState({
            registerFlag : true,
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
                                    this.onRegister();
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
