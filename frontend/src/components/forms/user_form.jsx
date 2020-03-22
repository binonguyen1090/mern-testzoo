

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
    const form = this.props.forms.map(form => (
      <div key={form.id}>
        <Link to={`/forms/${form._id}`} >
          {form.title}
        </Link>
        <button onClick={this.handleClick} value={form._id}>DELETE</button>
      </div>
    ));

    return (
      <div className='user-form-out'>
        <div id='user-form-header'>
          <h1>Your Forms</h1>
          <Link className='back-btn' to="/">Go back</Link>
        </div>
        <div key={form.id} >{form}</div>
      </div>
    );
  }
}