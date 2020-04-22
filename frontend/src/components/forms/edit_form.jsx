import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./create_form.css";

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.fetchForm(this.props.form_id).then((res) => {
      this.setState({
        title: res.form.data.title,
        category: res.form.data.category,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.modifyForm(this.props.form_id,this.state).then(() => {
      this.props.history.push(`/forms/${this.props.form_id}`);
    });
    
  }


    update(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
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
  render() {
    if (!this.props.errors) {
      return [];
    }
    return (
      <div className="create-form">
        <div id="user-form-header">
          <h1>Edit test</h1>
          <Link
            className="back-btn"
            to={`/forms/${this.props.form_id}`}
          >
            Go back
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.title}
              onChange={this.update("title")}
            />
            <br />
            <input
              type="textarea"
              value={this.state.category}
              onChange={this.update("category")}
            />
            <br />
            <div id="submit-create">
              <input type="submit" value="Update test" />
            </div>

            {this.renderErrors()}
          </div>
        </form>
        <br />
      </div>
    );
  }
}
