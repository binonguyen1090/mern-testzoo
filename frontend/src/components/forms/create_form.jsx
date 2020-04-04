import React from "react";
import { Link } from "react-router-dom";
import './create_form.css';

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            category: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
          .composeForm(this.state)
          .then(this.props.history.push("/home"));

    }

    update(v) {
        return (e) =>
            this.setState({
                [v]: e.target.value
            });
    }

    render() {
        return (
          <div className='create-form'>
            <div id='user-form-header'>
              <h1>Create test</h1>
              <Link className='back-btn' to="/">Go back</Link>
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
                <input
                  type="textarea"
                  value={this.state.category}
                  onChange={this.update("category")}
                  placeholder="Category"
                />
                <br />
                <div id='submit-create'>
                    <input type="submit" value="Create" />
                </div>
                
              </div>
            </form>
            <br />
          </div>
        );
    }
}
