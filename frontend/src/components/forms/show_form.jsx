
import React from 'react';
import { Link } from 'react-router-dom';
import './show_form.css';

import QuestionsIndex from "../questions/questions_index_container"

export default class ShowForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchForm(this.props.form_id);
    }

    render() {

        return (
          <div className="create-form">
            <Link
              className="back-btn2"
              to={`/users/${this.props.currentUserID}`}
            >
              Go Back
            </Link>

            <div className="form-show">
              <div id="form-top">
                <strong>{this.props.form.title}</strong>

                <div id="form-top2">
                  <Link className="create-question" to={`/questions`}>
                    Create A New Question
                  </Link>
                  <Link
                    className="edit-question"
                    to={`/forms/${this.props.form._id}/edit`}
                  >
                    Edit Test
                  </Link>

                  <div>Category: {this.props.form.category}</div>
                </div>
              </div>
              <QuestionsIndex
                key={this.props.form_id}
                formId={this.props.form_id}
              />
            </div>
            <Link
              className="back-btn2"
              to={`/users/${this.props.currentUserID}`}
            >
              Done
            </Link>
          </div>
        );
    }
}
