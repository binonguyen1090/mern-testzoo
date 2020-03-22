

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

    const personal = forms.filter(form => form.category === 'Personal' || form.category === 'personal');
    const geography = forms.filter(form => form.category === 'Geography' || form.category === 'geography');
    const math = forms.filter(form => form.category === 'Math' || 'math');
    const celebrity = forms.filter(form => form.category === 'Celebrity' || form.category === 'celebrity');
    const sports = forms.filter(form => form.category === 'Sports' || form.category === 'sports');
    const politics = forms.filter(form => form.category === 'Politics' || form.category === 'politics');
    
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
        

    // handleClick(e){
    //     e.preventDefault();
    // }

    // startGameClick(e){
    //     e.preventDefault()
    //     this.props.startGame({form: this.props.form.id, user: this.props.currentUser})
    
    // }

    
    return (
      <div className='form-index'>
        <h2>Personal</h2>
        <div className='form-item'>
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
        <h2>Celebrity</h2>
        <div className='form-item'>
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
        <h2>Sports</h2>
        <div className='form-item'>
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
        <h2>Politics</h2>
        <div className='form-item'>
          {
            politics.map((form, idx) => (
              <div className='form-index-form' key={idx} >
                <strong>{form.title}</strong>
                <div>{form.category}</div>
                <div>{form.user}</div>
              </div>
            ))
          }
        </div>
        <h2>Geography</h2>
        <div className='form-item'>
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
        <h2>All Forms</h2>
        <div className='form-item'>
          {
            forms.map((form, idx) => (
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
