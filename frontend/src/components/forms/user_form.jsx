

import React from 'react';
import { Link } from 'react-router-dom';
import './user_form.css'
import NavBarContainer from "../nav/navbar_container";

export default class UserForm extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
      this.props.fetchUserForms(this.props.currentUserID);
  }


  handleClick(e){
      e.preventDefault()
      const formId = e.currentTarget.value
      this.props.destroyForm(formId)
  }
  
  render() {
    const form = this.props.forms.map((form, idx) => (
      <div key={idx}>
        <Link id='link-forms' to={`/forms/${form._id}`} >
          <div className='form-index-form'>
            <strong>{form.title}</strong>
            <div id='form-footer'>
              <div>{form.category}</div>
              <button onClick={this.handleClick} value={form._id}>Delete?</button>
            </div>
          </div>
        </Link>
      </div>
    ));

    return (
      <div className='user-form-out'>
        <div id='user-form-header'>
          <h1>Your Tests</h1>
          <Link className='back-btn' to="/">Go back</Link>
        </div>
        <div id='form-item-padding'>
          <div className='form-item' key={form.id} >{form}</div>
        </div>
      </div>
    );
  }
}