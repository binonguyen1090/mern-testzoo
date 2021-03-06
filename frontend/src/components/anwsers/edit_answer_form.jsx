// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";
import "./create_answer.css";
export default class EditAnswerForm extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      body: "",
      correct: "",
      old: this.props.answer.correct
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();

    this.props.fetchAnswer(this.props.answer_id)
      .then((res)=>{
          this.setState({ body: res.answer.data.body, correct: res.answer.data.correct })
        })
      .then(()=>{
        this.props.fetchQuestionAnswers(this.props.answer.question);
      })
    // this.props.clearErrors();

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.modifyAnswer(this.props.answer_id, this.state)
      .then(()=>{
      this.props.history.push(`/questions/${this.props.answer.question}`);
      })
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
    const { answers } = this.props;

    let choices = [];
    const allCorrects = answers.map((answer) => {
      choices.push(answer.correct);
    });
    if (!this.props.errors) {
      return [];
    }
    
    return (
      <div className="show-q">
        <Link
          className="back-btn"
          to={`/questions/${this.props.answer.question}`}
        >
          Go Back
        </Link>
        <form onSubmit={this.handleSubmit}>
          {/* <h3>Create Answer:</h3> */}
          <h1>Edit Answer</h1>
          <div id="ans-form-holder">
            <input
              id="ans-input1"
              type="textarea"
              value={this.state.body}
              onChange={this.update("body")}
            />
            {!choices.includes("true") ? (
              <label className="container">
                True
                <input
                  type="radio"
                  id="malet"
                  name="gender"
                  value={true}
                  onChange={this.update("correct")}
                />
                <span className="checkmark"></span>
              </label>
            ) : (
              ""
            )}
            <label className="container">
              False
              <input
                type="checkbox"
                value={false}
                onChange={this.update("correct")}
              />
              <span className="checkmark"></span>
            </label>
            {/* <input
              id="ans-input2"
              type="textarea"
              value={this.state.correct}
              onChange={this.update("correct")}
            /> */}
          </div>
          <div id="submit-create2">
            <input type="submit" value="Update Answer" />
          </div>
          {this.renderErrors()}
        </form>
        <br />
      </div>
    );
  }
}

// export default TweetCompose;
