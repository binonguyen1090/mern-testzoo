// src/components/tweets/tweet_compose.js
import React from "react";
import { Link } from 'react-router-dom';
import FormIndexContainer from '../forms/forms_index_container'
import NavBarContainer from "../nav/navbar_container";
import './homepage.css';
export default class HomePage extends React.Component {
    constructor(props) {
        
        super(props);

       
    }

    
    render() {
      const { currentUserID } = this.props
      return (
        <div className='homepage-out'>
          <NavBarContainer />
          <div className="homepage">
            <h1>Welcome {currentUserID}</h1>
            <div className='homepage-links'>         
              <div className="link-to-createform">
                <Link id='homepage-link' to={`/forms`}>
                  <div>Create a Form</div>
                  <img src="create-form.png" />
                </Link>
              </div>
              <div className="link-to-myforms">
                <Link id='homepage-link' to={`/users/${currentUserID}`}>
                  <div>View Your Forms</div>
                  <img src="view-forms.png"/>
                </Link>
              </div>
            </div> 
            <FormIndexContainer />
          </div>
        </div>
      );
    }
}

