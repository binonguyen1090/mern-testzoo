// src/components/tweets/tweet_compose.js

import React from "react";


export default class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            difficulty: "",
            points = 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ newTweet: nextProps.newTweet.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.composeQestionForm(this.state)

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
                            onChange={this.update('text')}
                            placeholder="text"
                        />
                        <br />
                        <input
                            type="textarea"
                            value={this.state.difficulty}
                            onChange={this.update('difficulty')}
                            placeholder="difficulty"
                        />
                        <br />
                        <br />
                        <input
                            type="textarea"
                            value={this.state.point}
                            onChange={this.update('point')}
                            placeholder="point"
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
