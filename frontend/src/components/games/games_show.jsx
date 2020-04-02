import React from "react"

import {Link} from "react-router-dom";

import GameQuestionsContainer from "./game_questions_container";

export default class GameShow extends React.Component{
    constructor(props){
        super(props)
        this.getPoints = this.getPoints.bind(this)
    }

    componentDidMount(){
        this.props.fetchGame(this.props.gameId)
        if(this.props.formId !== ""){
            this.props.fetchForm(this.props.formId)
        }
    }

    handlePlusPoints(e){
        e.preventDefault()
        const points = this.props.game.score
        if (e.currentTarget.value === "true"){
            this.props.updateGame(this.props.gameId, {score: points+1})
        }
    }

    getPoints(e){
        e.preventDefault()
        this.props.fetchGame(this.props.gameId)
    }

    render(){
        return(
            <div>
                <h1>here is the game show page</h1>
                <GameQuestionsContainer handlePlus={this.handlePlusPoints} form={this.props.form} gameId={this.props.gameId} game={this.props.game}/>
                <button onClick={this.getPoints}>Submit the Test</button>
                <h1>Result: {this.props.game.score} Correct</h1>
                <Link to={`/games/forms/${this.props.formId}`}/>
                <Link to={'/home'}/>
            </div>
        )
    }
}