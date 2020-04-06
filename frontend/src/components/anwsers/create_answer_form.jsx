// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from "react-router-dom";

export default class CreateAnswerForm extends React.Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     question: props.question_id,
                     correct: "",
                     body: "",
                     errors: {}
                   };

                   this.handleSubmit = this.handleSubmit.bind(this);
                   this.renderErrors = this.renderErrors.bind(this);
                 }

                 componentDidMount() {
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

                   this.props.composeAnswer(this.state).then(result => {
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
                   return e =>
                     this.setState({
                       [v]: e.target.value
                     });
                 }

                

  render() {
    if (!this.props.errors) {
      return [];
    }
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
          {this.renderErrors()}
        </form>
        <br />
      </div>
    );
  }
}


// export default TweetCompose;
