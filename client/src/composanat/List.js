import {get_cont} from '../actions/actions'
import React, {Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import "./List.css"
  class List extends Component {

componentDidMount() {
    this.props.get_cont();
  }
  
      render() {
          return (
            <div className="ContactList">
            {this.props.contacts.map(el => (
              <Contact contact={el} key={el._id} id={el.
                _id} />
            ))}
          </div>
          )
      }
  }
  const mapStatetoProps = state => ({
    contacts: state.contacts
  });
  
  export default connect(mapStatetoProps, { get_cont })(List)