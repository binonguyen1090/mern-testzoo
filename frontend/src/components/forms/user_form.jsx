

import React from 'react';
import { Link } from 'react-router-dom';


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
          <li key={form.id}>
            <Link to={`/forms/${form._id}`} >
              {form.title}
            </Link>
            <button onClick={this.handleClick} value={form._id}>DELETE</button>
          </li>
        ));

        return (
          <div>
            <h1>My Forms</h1>
            <div>
              <ul key={form.id} >{form}</ul>
            </div>
            <button>
              <Link to="/">Back</Link>
            </button>
          </div>
        );
    }
}