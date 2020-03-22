import React from "react"

import {Link} from "react-router-dom";

import GameQuestionsContainer from "./game_questions_container";

export default class GameShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchGame(this.props.gameId)
        if(this.props.formId !== ""){
            this.props.fetchForm(this.props.formId)
            // this.props.fetchQuestions(this.props.formId)
        }
    }

    render(){
        return(
            <div>
                <h1>here is the game show page</h1>
                <GameQuestionsContainer form={this.props.form}/>
                <Link to={`/games/forms/${this.props.formId}`}/>
            </div>
        )
    }
}