import { connect } from "react-redux";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { add_cont } from "../actions/actions";
class ModalesADD extends Component {
  state = {
    show: false,
    name: "",
    telphone: "",

    adress: ""
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <Button
          className="classbtn"
          variant="primary"
          onClick={this.handleShow}
        >
          +{" "}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <input
              name="name"
              placeholder="lien image"
              value={this.state.img}
              onChange={this.handleChange}
            />
            <input
              name="telphone"
              placeholder="rating"
              value={this.state.rate}
              onChange={this.handleChange}
            />

            <input
              name="adress"
              placeholder="name"
              value={this.state.moviename}
              onChange={this.handleChange}
            />
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {/* <Button variant="primary"  onClick={()=>{this.props.handleADD(this.state.img,this.state.rate,this.state.moviename,this.state.dat);this.handleClose();}}>
              
ADD            </Button> */}
            <Button
              variant="primary"
              onClick={() => {
                this.props.add_cont({
                //   _id: Date.now().toString(),
                  name: this.state.name,
                  telphone: this.state.telphone,
                  adress: this.state.adress
                });
                this.handleClose();
              }}
            >
              ADD{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



export default connect(null, { add_cont })(ModalesADD);
