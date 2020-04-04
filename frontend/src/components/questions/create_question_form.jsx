// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";
import './create_q.css'

export default class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          form: props.form._id,
          text: "",
          difficulty: "",
          points: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newTweet: nextProps.newTweet.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        
        const { form } = this.props

        this.props
          .composeQuestion(this.state)
          .then(this.props.history.push(`/forms/${form._id}`));

    }

    update(v) {
        return (e) =>
            this.setState({
                [v]: e.target.value
            });
    }

    render() {
        // if (!text) return ""
        return (
          <div className="create-ques">
            <div id='user-form-header'>
              <h1>Create question</h1>
              <Link className='back-btn' to={`/forms/${this.props.form._id}`}> Go Back</Link>
            </div>
            <form onSubmit={this.handleSubmit}>
              
                <input
                  className='q-text'
                  type="textarea"
                  value={this.state.text}
                  onChange={this.update("text")}
                  placeholder="Question"
                />
                <div>
                  <input
                    className='q-diff'
                    type="textarea"
                    value={this.state.difficulty}
                    onChange={this.update("difficulty")}
                    placeholder="difficulty level (1-3)"
                  />
                  
                  <input
                    className='q-diff'
                    type="textarea"
                    value={this.state.points}
                    onChange={this.update("points")}
                    placeholder="Pts question is worth"
                  />
                </div>
                <div id='submit-create2'>
                  <input type="submit" value="Create" />
                </div>
              
            </form>
            <br />
          </div>
        );
    }
}

// export default TweetCompose;
