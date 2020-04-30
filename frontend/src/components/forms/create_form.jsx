import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./create_form.css";

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "",
      errors: {}

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleChangeCate = this.handleChangeCate.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllForms();
    this.props.clearErrors();
  }

  handleChangeCate(e) {
      this.setState({ category: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    
    this.props.composeForm({title: this.state.title, category: this.state.category}).then((result) => {
      if (Object.keys(result).includes("form")) {
        this.props.history.push(`/forms/${result.form.data._id}`);
      } else {
        this.setState({ errors: result.errors });
      }
    });
  }

  update(v) {
    return (e) =>
      this.setState({
        [v]: e.target.value,
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
  render() {
    const { forms } = this.props;
      let choices = [];
     const allCategories = forms.map((form) => {
       if (!choices.includes(form.category)){
         choices.push(form.category);
       }
     });
 

    let choice = choices.map(
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
          <h1>Create test</h1>
          <Link className="back-btn" to="/">
            Go back
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="textarea"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title"
            />

            <br />

            <label>
              <select onChange={this.handleChangeCate}>
                <option> Select Category</option>
                {choice}
              </select>
            </label>
              <br/>
              <br/>
            {/* <div className="create-or" >OR</div> */}
            {this.state.category === "Select Category" ||
            !choices.includes(this.state.category) ? (
              <input
                id="new-category"
                type="textarea"
                // value={this.state.category}
                onChange={this.update("category")}
                placeholder="Create New Category"
              />
            ) : (
              ""
            )}
            {/* <input
              id="new-category"
              type="textarea"
              value={this.state.category}
              onChange={this.update("category")}
              placeholder="Create New Category"
            /> */}

            <br />
            <br />
            <div id="submit-create">
              <input type="submit" value="Create test" />
            </div>

            {this.renderErrors()}
          </div>
        </form>
        <br />
      </div>
    );
  }
}
