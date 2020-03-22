import React from 'react';
import { Link } from 'react-router-dom';



export default class FormIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllForms();
    }

    render() {
        
        if (!this.props.forms) {
            return []
        }
        const { forms } = this.props
        return (
            <div>
                <h1>Form index</h1>
                <div >
                    <ul>
                        {
                            forms.map((form,idx )=> (
                                <li key={idx} >
                                    <Link to={`/games/forms/${form._id}`}>       
                                        <h3>{form.title}</h3>
                                        <h5>{form.category}</h5>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
