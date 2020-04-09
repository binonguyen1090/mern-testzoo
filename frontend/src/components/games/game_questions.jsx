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
      <div id={question._id} className='game-question'>
        <h3>> {question.text}</h3>
        <GameAnswersContainer questionId={question._id} handlePlus={this.props.handlePlus} gameId={this.props.gameId} game={this.props.game}/>
      </div>
    ))
    return(
      <div>
          {question}
      </div>
    )
  }
}