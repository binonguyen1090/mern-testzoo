// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";


export default class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          form: props.form._id,
          text: "",
          difficulty: "",
          points: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newTweet: nextProps.newTweet.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        
        const { form } = this.props
        this.setState({ form_id_attached: form._id });
        
        this.props
          .composeQuestion(form._id, this.state)
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
          <div>
            <h1>Create questions</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="textarea"
                  value={this.state.text}
                  onChange={this.update("text")}
                  placeholder="text"
                />
                <br />
                <input
                  type="textarea"
                  value={this.state.difficulty}
                  onChange={this.update("difficulty")}
                  placeholder="difficulty"
                />
                <br />
                <br />
                <input
                  type="textarea"
                  value={this.state.points}
                  onChange={this.update("points")}
                  placeholder="points"
                />
                <br />
                
                <input type="submit" value="Submit" />
                <button>
                  <Link to={`this.props.form._id`}>Back</Link>
                </button>
              </div>
            </form>
            <br />
          </div>
        );
    }
}

// export default TweetCompose;
