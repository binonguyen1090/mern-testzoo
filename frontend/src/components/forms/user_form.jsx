

import React from 'react';
import { Link } from 'react-router-dom';


export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserForms(this.props.currentUserID);
    }
   
    render() {

        
        const form = this.props.forms.map(form => (
          <li key={form.id}>
            <Link to={`/forms/${form._id}`} >
              {form.title}
            </Link>
          </li>
        ));
        // const { forms, destroyForm} = this.props
        return (
          <div>
            <h1>My Forms</h1>
            <div>
              <ul>{form}</ul>
            </div>
            <button>
              <Link to="/">Back</Link>
            </button>
          </div>
        );
    }
}