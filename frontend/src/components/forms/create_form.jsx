import React from "react";
import { Link, Redirect} from "react-router-dom";
import './create_form.css';

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

    }
     
    componentDidMount(){
      this.props.clearErrors();
    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.composeForm(this.state).then(result => {
          if (Object.keys(result).includes('form')){
            (this.props.history.push(`/users/${this.props.currentUser.id}`))
          }else{
            this.setState({ errors: result.errors });
          }
        } )
    }

    update(v) {
        return (e) =>
            this.setState({
                [v]: e.target.value
            });
    }

    renderErrors() {
      return (
        <ul>
          {Object.keys(this.props.errors).map((error, i) => (
            <li className="session-errors" key={`error-${i}`}>{this.props.errors[error]}</li>
          ))}
        </ul>
      );
    }
    render() {
      if (!this.props.errors) {
        return []
      }
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
                <br/>
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
                

                {this.renderErrors()}
              </div>
            </form>
            <br />
          </div>
        );
    }
}
