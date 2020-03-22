

import React from 'react';
import { Link } from 'react-router-dom';
// import GameStartContainer from "../games/game_start_container"


export default class FormIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.startGameClick = this.startGameClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllForms();
    }

    // handleClick(e){
    //     e.preventDefault();
    // }

    // startGameClick(e){
    //     e.preventDefault()
    //     this.props.startGame({form: this.props.form.id, user: this.props.currentUser})
    
    // }

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
                                    <button onClick={this.startGameClick}>Choose this Test</button>
                                    {/* <GameStartContainer form={form} currentUser={this.props.currentUser}/> */}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
