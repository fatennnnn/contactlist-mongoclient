
import React, { Component } from 'react'
import { connect } from "react-redux";
import {del_cont} from '../actions/actions'
import Modaledit from './Modaledit'
import "./Contact.css";

function Contact(props) {
    return (
      <div className="contact">
        <h5 className="contactName"> Name : {props.contact.name} </h5>
        <h5 className="contactTel"> Telephone: {props.contact.telphone} </h5>
        <h5 className="contactEmail"> Email: {props.contact.adress} </h5>
        <div className="DeleteModify">
          <button onClick={() => props.del_cont(props.id)}>remove</button>
          <Modaledit contact={props.contact} />
        </div>
      </div>
    );
}

export default connect(null, { del_cont })(Contact);
