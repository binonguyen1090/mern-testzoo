// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";
import "./create_q.css";

export default class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      difficulty: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();

    this.props.fetchQuestion(this.props.question_id).then((res) => {
      this.setState({
        text: res.question.data.text,
        difficulty: res.question.data.difficulty,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.modifyQuestion(this.props.question_id, this.state).then(() => {
      this.props.history.push(`/questions/${this.props.question._id}`);
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
  update(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }


  render() {
    if (!this.props.errors) {
      return [];
    }
    // if (!text) return ""
    return (
      <div className="create-ques">
        <div id="user-form-header">
          <h1>Edit question</h1>
          <Link className="back-btn" to={`/questions/${this.props.question._id}`}>
            Go Back
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="q-text"
            type="textarea"
            value={this.state.text}
            onChange={this.update("text")}
          />
          <div>
            <input
              className="q-diff"
              type="textarea"
              value={this.state.difficulty}
              onChange={this.update("difficulty")}
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
            <input type="submit" value="Update Question" />
          </div>
          {this.renderErrors()}
        </form>
        <br />
      </div>
    );
  }
}

// export default TweetCompose;
