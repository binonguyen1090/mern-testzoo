import React from "react";

import GameAnswersContainer from "./game_amswers_container"

export default class GameQuestions extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // if (this.props.questionId !== ""){
        //     this.props.fetchQuestionAnswers(this.props.questionId)
        // }
        this.props.fetchQuestions(this.props.form._id)
    }

    render(){

        // const answer = this.props.answers.map(answer => (
        //     <div>{answer.body}</div>
        // ))


        const question = this.props.questions.map(question => (
            <ul>
                <h2>{question.text}</h2>
                <GameAnswersContainer questionId={question._id}/>
            </ul>
        ))
        return(
            <div>
                {question}
            </div>
        )
    }
}