import React from 'react';
import { Link } from 'react-router-dom';

import './forms_index.css'
import GetUser from '../user/get_user_container'
export default class FormIndex extends React.Component {
  constructor(props) {
      super(props);
  }


  componentDidMount() {
    this.props.fetchAllForms();
  }


  // componentDidUpdate(prevProps) {
  //     if (prevProps.user.id != this.props.user.id) {
  //         this.props.fetchBoards(this.props.user.id);
  //     }
  // }


  render() {
    if (!this.props.forms) {
        return []
    }

    const { forms } = this.props;


    const personal = forms.filter(form => form.category === 'Personal');
    const geography = forms.filter(form => form.category === 'Geography');
    const math = forms.filter(form => form.category === 'Math');
    const celebrity = forms.filter(form => form.category === 'Celebrity');
    const sports = forms.filter(form => form.category === 'Sports');
    const movies = forms.filter(form => form.category === 'Movies');
    const others = forms.filter(
      (form) =>
        form.category !== "Personal" &&
        form.category !== "Geography" &&
        form.category !== "Celebrity" &&
        form.category !== "Sports" &&
        form.category !== "Movies"
    );
    
    const allCategories = forms.map((form,idx) => form.category);
    const categories = allCategories.filter((cat, i) => {
      return allCategories.indexOf(cat) === i;
    });

    return (
      <div className="form-index">
        <h2>Personal</h2>
        <div className="form-item">
          {personal.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              >
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>

                {/* <div>{form.user}</div> */}
              </div>
            </Link>
          ))}
        </div>
        <h2>Celebrity</h2>
        <div className="form-item">
          {celebrity.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>
                {/* <div>{form.user}</div> */}
              </div>
            </Link>
          ))}
        </div>
        <h2>Sports</h2>
        <div className="form-item">
          {sports.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>
                {/* <div>{form.user}</div> */}
              </div>
            </Link>
          ))}
        </div>
        <h2>Movies</h2>
        <div className="form-item">
          {movies.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>
                {/* <div>{form.user}</div> */}
              </div>
            </Link>
          ))}
        </div>
        <h2>Geography</h2>
        <div className="form-item">
          {geography.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>
                {/* <div>{form.user}</div> */}
              </div>
            </Link>
          ))}
        </div>
        <h2>Other Tests</h2>
        <div className="form-item">
          {others.map((form, idx) => (
            <Link id="link-forms" to={`/games/forms/${form._id}`} key={idx}>
              <div className="form-index-form" key={idx}>
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>
                  <GetUser user_id={form.user} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
