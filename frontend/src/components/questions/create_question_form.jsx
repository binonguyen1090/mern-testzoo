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
                     points: 0,
                     errors: {}
                   };

                   this.handleSubmit = this.handleSubmit.bind(this);
                   this.renderErrors = this.renderErrors.bind(this);
                 }

                 componentDidMount() {
                   this.props.clearErrors();
                 }

                 handleSubmit(e) {
                   debugger;
                   e.preventDefault();
                   const { form } = this.props;
                   this.props.composeQuestion(this.state).then(result => {
                     if (Object.keys(result).includes("question")) {
                       debugger;
                       this.props.history.push(`/forms/${form._id}`);
                     } else {
                       debugger;
                       this.setState({ errors: result.errors });
                     }
                   });

                   //    const { form } = this.props;

                   //    this.props
                   //      .composeQuestion(this.state)
                   //      .then(this.props.history.push(`/forms/${form._id}`));
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
