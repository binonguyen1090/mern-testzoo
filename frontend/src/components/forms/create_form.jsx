// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";


export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            category: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newTweet: nextProps.newTweet.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.composeForm(this.state)

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
            <h1>Create form</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="textarea"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Title"
                />
                <br />
                <input
                  type="textarea"
                  value={this.state.category}
                  onChange={this.update("category")}
                  placeholder="Category"
                />
                <br />
                <div>
                    <input type="submit" value="Submit" />
                </div>
                <button>
                  <Link to="/">Back</Link>
                </button>
              </div>
            </form>
            <br />
          </div>
        );
    }
}

// export default TweetCompose;
