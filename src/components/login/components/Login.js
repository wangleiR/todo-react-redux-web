import React from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button} from "react-bootstrap";
import '../style.scss';

export default ({onLogin, logged}) => (
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
            if (this.username.value === 'tw' && this.password.value === 'tw') {
                onLogin();
            }
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
