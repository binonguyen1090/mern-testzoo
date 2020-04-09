import React from "react";

export default class GameAnswers extends React.Component{
  constructor(props){
    super(props)
    this.handlePlus = this.props.handlePlus.bind(this)
    // this.handleE = this.handleE.bind(this);
  }

  componentDidMount(){
    if (this.props.questionId !== ""){
        this.props.fetchQuestionAnswers(this.props.questionId)
    }
  }
  
  // handleE() {
    // document.getElementById(`${this.props.questionId}`).style.display = 'none'
  // }

  render(){
    const questId = this.props.questionId
    let itAnswer;
    if (this.props.answers.hasOwnProperty(questId)) {
      itAnswer = this.props.answers[questId]
    }
    return(
      <div className='game-answer'>
        {
        itAnswer && itAnswer.map(questionAnswer => (
          <button onClick={this.handlePlus} id={questionAnswer._id} value={questionAnswer.correct}>{questionAnswer.body}</button>
        ))
        }
      </div>
    )
  }
}