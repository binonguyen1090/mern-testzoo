

import React from 'react';
import { Link } from 'react-router-dom';


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
          {/* {displayCat}
          {
            categories.map(cat => (
              <div>{cat}</div>
            ))
          } */}
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
      </div>
    )
  }
}
