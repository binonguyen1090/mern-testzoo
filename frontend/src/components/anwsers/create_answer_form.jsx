// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";
import "./create_answer.css";
export default class CreateAnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: props.question_id,
      correct: "",
      body: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.checkOnlyOne = this.checkOnlyOne.bind(this);
  }

  // checkOnlyOne(b) {
  //   var x = document.getElementsByClassName("container");
  //   var i;

  //   for (i = 0; i < x.length; i++) {
  //     if (x[i].value != b) x[i].checked = false;
  //   }
  // }
  componentDidMount() {
 
    this.props.fetchQuestionAnswers(this.props.question_id);

    this.props.clearErrors();
  }
  handleSubmit(e) {
    e.preventDefault();
    const { form, question_id } = this.props;

    //  this.props
    //    .composeAnswer(this.state)
    //    .then(
    //      this.props.history.push(`/questions/${question_id}`)
    //    );

    this.props.composeAnswer(this.state).then((result) => {
      if (Object.keys(result).includes("answer")) {
        this.props.history.push(`/questions/${question_id}`);
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
    const { answers } = this.props;
    if (answers === []){
    }
    let choices = [];
    const allCorrects = answers.map((answer) => {
      choices.push(answer.correct);
    });
    if (!this.props.errors) {
      return [];
    }
    return (
      <div className="show-q">
        <Link className="back-btn" to={`/questions/${this.props.question_id}`}>
          Go Back
        </Link>
        <form onSubmit={this.handleSubmit}>
          <div id="ans-form-holder">
            <input
              id="ans-input1"
              type="textarea"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Enter answer here"
            />
            {/* <input
              type="radio"
              id="malet"
              name="gender"
              value={true}
              onChange={this.update("correct")}
            />
            <label for="malet">True</label>
            <br></br>
            <input
              type="radio"
              id="malef"
              name="gender"
              value={false}
              onChange={this.update("correct")}
            />
            <label for="malef">False</label>
            <br></br> */}
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
                type="radio"
                id="malef"
                name="gender"
                value={false}
                onChange={this.update("correct")}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div id="submit-create2">
            <input type="submit" value="Create Answer" />
          </div>
          {this.renderErrors()}
        </form>
        <br />
      </div>
    );
  }
}
