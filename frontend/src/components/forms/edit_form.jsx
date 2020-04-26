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
    this.handleChangeCate = this.handleChangeCate.bind(this);
  }
  handleChangeCate(e) {
    this.setState({ category: e.target.value });
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
    this.props.modifyForm(this.props.form_id, this.state).then(() => {
      this.props.history.push(`/forms/${this.props.form_id}`);
    });
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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
    let choice = ["Personal", "Celebrity", "Sports", "Movies", "Geography"].map(
      (cate, idx) => {
        return (
          <option key={idx} value={cate}>
            {cate}
          </option>
        );
      }
    );
    if (!this.props.errors) {
      return [];
    }
    return (
      <div className="create-form">
        <div id="user-form-header">
          <h1>Edit test</h1>
          <Link className="back-btn" to={`/forms/${this.props.form_id}`}>
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
            <label className="dropdown">
              <select className="dropdown" onChange={this.handleChangeCate}>
                <option> Select category</option>
                {choice}
              </select>
            </label>
            <div>OR</div>

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
