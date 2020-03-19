

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
        // if (!this.props.user) {
        //     return null;
        // }
        const { forms } = this.props
        
        return (
            <div>
                <h1>Form index</h1>
                <div >
                    <ul>
                        {/* forms = {all:array} */}

                        {
                            forms.map((form,idx )=> (
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
