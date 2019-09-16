import React, {Component} from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

class Tombol extends Component {
  constructor(props){
    super(props);
    this.state = {modal: false}
    this.LoginSukses = this.LoginSukses.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  LoginSukses(e){
    e.preventDefault()
    this.setState({modal: true})
  }
  handleClose(){
    this.setState({modal: false})
  }
  render(){
    return(
      <div>
        <Form onSubmit={(e)=>this.LoginSukses(e)}>
          <Form.Group>
            <Form.Control type="email" placeholder="Masukan email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Term & Condition" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Modal show={this.state.modal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Anda berhasil login</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="primary">Save Username & Password</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Tombol;