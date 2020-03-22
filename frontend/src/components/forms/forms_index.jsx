

import React from 'react';
import { Link } from 'react-router-dom';
import './forms_index.css'

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
    const celebrity = forms.filter(form => form.category === 'Math');
    const sports = forms.filter(form => form.category === 'Math');
    
    const allCategories = forms.map(form => form.category);
    const categories = allCategories.filter((cat, i) => {
      return allCategories.indexOf(cat) === i;
    });

    // const displayCat = categories.map((cat) => {
    //   const select = forms.filter(form => {
    //     if (form.category === cat) {
    //       return <div>1</div>;
    //     }
    //   })
    // })
    const username = userId => {
        
    }
    
    return (
      <div className='form-index'>
        <h1>All Forms</h1>
        <div className='form-index-forms'>
          {
            forms.map((form,idx )=> (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
        <div className='form-personal'>
          {
            personal.map((form, idx) => (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
        <div className='form-celebrity'>
          {
            celebrity.map((form, idx) => (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
        <div className='form-sports'>
          {
            sports.map((form, idx) => (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
        <div className='form-geography'>
          {
            geography.map((form, idx) => (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
