// src/components/tweets/tweet_compose.js

import React from "react";

export default class CreateAnswerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.composeAnswer(this.state);
  }

  update(v) {
    return e =>
      this.setState({
        [v]: e.target.value
      });
  }

  render() {
    return (
      <div>
        <h1>Create form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.correct}
              onChange={this.update("correct")}
              placeholder="True or False"
            />
            <br />
            <input
              type="textarea"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="body"
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}

// export default TweetCompose;
