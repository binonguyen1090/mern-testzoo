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
                     errors:{}
                   };

                   this.handleSubmit = this.handleSubmit.bind(this);
                  this.renderErrors = this.renderErrors.bind(this);

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
                     <div>
                       <h1>Create Answer for this:</h1>

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
                           <button>
                             <Link to={`/forms/${this.props.form._id}`}>
                               Back
                             </Link>
                           </button>
                           {this.renderErrors()}
                         </div>
                       </form>
                       <br />
                     </div>
                   );
                 }
               }

// export default TweetCompose;
