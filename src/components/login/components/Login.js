import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Modal, Button} from "react-bootstrap";
import '../style.scss';
import {login} from "../../../restfulAPI/API";

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showDialog: true,
        }
    }

    render() {
      const { logged,onLogin } = this.props;
        return (
            <div>
                {
                    !logged && this.state.showDialog &&
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
                                    onLogin(login(this.username.value,this.password.value));
                                }}>
                                    Login
                                </Button>
                                <Button>
                                    <Link to={`/`}>Close</Link>
                                </Button>
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
