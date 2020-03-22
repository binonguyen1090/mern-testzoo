import React from "react";

export default class GameAnswers extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if (this.props.questionId !== ""){
            this.props.fetchQuestionAnswers(this.props.questionId)
        }
    }

    render(){
        const questId = this.props.questionId
        let itAnswer
        if (this.props.answers.hasOwnProperty(questId)) {
            itAnswer = this.props.answers[questId]
        }
        return(
            <li>
                {
                    itAnswer && itAnswer.map(questionAnswer => (
                        <div>{questionAnswer.body}</div>
                    ))
                }
            </li>
        )
    }
}