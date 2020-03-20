

import React from 'react';
import { Link } from 'react-router-dom';


export default class ShowForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchForm(this.props.form_id);
        debugger
        this.props.fetchQuestions(this.props.form_id);

    }

    render() {
     
        return (
          <div>
            <h1>Show Forms</h1>
            <h1>{this.props.form.title}</h1>
            <h1>{this.props.form.category}</h1>
            <div>
              <Link to={`/questions`}>Create Questions</Link>
              {/* <Link to={`/answers`}>Create Answer</Link> */}
              <button>
                <Link to={`/users/${this.props.currentUserID}`}>Back</Link>
              </button>
            </div>
          </div>
        );
    }
}
