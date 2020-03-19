// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from 'react-router-dom';
import FormIndexContainer from '../forms/forms_index_container'

export default class HomePage extends React.Component {
    constructor(props) {
        
        super(props);

       
    }

    
    render() {
        const { currentUserID } = this.props
        return (
            <div>
                <h1>HomePage</h1>
                <div>
                    <Link to={`/forms`}>Create Form</Link>
                </div>
                <div>
                    <Link to={`/user/${currentUserID}`}>My Forms</Link>
                </div>
                <FormIndexContainer />
            </div>
        );
    }
}

