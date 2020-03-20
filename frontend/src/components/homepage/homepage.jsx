// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from 'react-router-dom';
import FormIndexContainer from '../forms/forms_index_container'
import NavBarContainer from "../nav/navbar_container";

export default class HomePage extends React.Component {
    constructor(props) {
        
        super(props);

       
    }

    
    render() {
        const { currentUserID } = this.props
        return (
            <div>
              <NavBarContainer />
              <h1>HomePage</h1>
              <div>
                  <Link to={`/forms`}>Create Form</Link>
              </div>
              <div>
                  <Link to={`/users/${currentUserID}`}>My Forms</Link>
              </div>
              <FormIndexContainer />
            </div>
        );
    }
}

