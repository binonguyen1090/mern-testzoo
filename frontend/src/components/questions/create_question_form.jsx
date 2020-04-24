// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";
import "./create_q.css";

export default class CreateQuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: props.form._id,
      text: "",
      difficulty: "",
      points: 0,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    this.props.composeQuestion(this.state).then((result) => {
      if (Object.keys(result).includes("question")) {
        this.props.history.push(`/questions/${result.question.data._id}`);
      } else {
        this.setState({ errors: result.errors });
      }
    });
  }
 


  

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  update(v) {
    return (e) =>
      this.setState({
        [v]: e.target.value,
      });
  }

  render() {
    if (!this.props.errors) {
      return [];
    }
    // if (!text) return ""
    return (
      <div className="create-ques">
        <div id="user-form-header">
          <h1>Create question</h1>
          <Link className="back-btn" to={`/forms/${this.props.form._id}`}>
            {" "}
            Go Back
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="q-text"
            type="textarea"
            value={this.state.text}
            onChange={this.update("text")}
            placeholder="Question"
          />
          <div>
            <input
              className="q-diff"
              type="textarea"
              value={this.state.difficulty}
              onChange={this.update("difficulty")}
              placeholder="difficulty level (1-3)"
            />

            {/* <input
                    className='q-diff'
                    type="textarea"
                    value={this.state.points}
                    onChange={this.update("points")}
                    placeholder="Pts question is worth"
                  /> */}
          </div>
          <div id="submit-create2">
            <input type="submit" value="Create Question" />
          </div>
          {this.renderErrors()}
        </form>
        <br />
      </div>
    );
  }
}

// export default TweetCompose;
