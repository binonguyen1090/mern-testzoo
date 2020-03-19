

import React from 'react';
import { Link } from 'react-router-dom';


export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserForms(this.props.currentUserID);
    }
   
    render() {

        if (!this.props.forms) {
            return []
        }

        const { forms } = this.props

        return (
            <div>
                <h1>My Forms</h1>
                <div >
                    <ul>

                        {
                            forms.map((form, idx) => (

                                <li key={idx} >
                                    <h3>{form.title}</h3>
                                    <h5>{form.category}</h5>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
