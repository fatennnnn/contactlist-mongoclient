import { connect } from "react-redux";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { edit_cont } from "../actions/actions";

class Modaledit extends Component {

    state= {show :false,
        name:"",
        telphone:"",

        adress:"",
  }
     handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});
     handleChange=(event)=>{
        this.setState({
             [event.target.name]:event.target.value

    
        })
    
    }
    getContact=()=>{
      this.setState({
        name: this.props.contact.name,

        telphone: this.props.contact.telphone,
        adress: this.props.contact.adress
      });
    }
    render() {

    return (
      <div>
        <Button
          className="taillebt"
          variant="primary"
          onClick={() => {
            this.getContact();
            this.handleShow();
          }}
        >
          edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <input
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="telphone"
              placeholder="phone"
              value={this.state.telphone}
              onChange={this.handleChange}
            />

            <input
              name="adress"
              placeholder="name"
              value={this.state.adress}
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.edit_cont(this.props.contact._id, {
                  name: this.state.name,
                  telphone: this.state.telphone,
                  adress: this.state.adress
                });
                this.handleClose();
              }}
            >
              SaveEdit{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    ); 

  }
    
}

  
export default connect(null, { edit_cont })(Modaledit);
