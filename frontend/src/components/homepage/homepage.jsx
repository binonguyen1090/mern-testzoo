// src/components/tweets/tweet_compose.js

import React from "react";
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

       
    }

    
    render() {
        // if (!text) return ""
        return (
            <div>
                <h1>HomePage</h1>
                <Link to={`/forms`}>Create Form</Link>
                
            </div>
        );
    }
}

