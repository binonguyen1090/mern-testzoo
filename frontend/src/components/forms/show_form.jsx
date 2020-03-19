

import React from 'react';
import { Link } from 'react-router-dom';


export default class ShowForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchForm(this.props.form_id);

    }

    render() {
        return (
            <div>
                <h1>Show Forms</h1>
                <h1>{this.props.form.title}</h1> 
                <h1>{this.props.form.category}</h1>
            </div>
        )
    }
}
