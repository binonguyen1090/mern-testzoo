// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";

export default class CreateAnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: props.question_id,
      correct: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //     this.setState({ newTweet: nextProps.newTweet.text });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const { form, question_id } = this.props;

    this.props
      .composeAnswer(this.state)
      .then(this.props.history.push(`/questions/${question_id}`));

;
  }

  update(v) {
    return e =>
      this.setState({
        [v]: e.target.value
      });
  }

  render() {
    return (
      <div className="show-q">
        <Link className="back-btn" to={`/forms/${this.props.form._id}`}>
          Go Back
        </Link>
        <form onSubmit={this.handleSubmit}>
          {/* <h3>Create Answer:</h3> */}
          <div id='ans-form-holder'>
            <input
              id='ans-input1'
              type="textarea"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Enter answer here"
            />
            <input
              id='ans-input2'
              type="textarea"
              value={this.state.correct}
              onChange={this.update("correct")}
              placeholder="True/False"
            />
          </div>
          <div id="submit-create2">
            <input type="submit" value="Create Answer" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

// export default TweetCompose;
