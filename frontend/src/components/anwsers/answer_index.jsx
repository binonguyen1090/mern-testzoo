import React from "react";

export default class AnswersIndex extends React.Component{
  constructor(props){
      
      super(props)
  }

  componentDidMount(){
      
      if (this.props.questionId !== ""){
        this.props.fetchQuestionAnswers(this.props.questionId);
      }
  }

  render(){
      
      
    return (
      <div className='answers-box2'>
        {
          this.props.answers.map(ans => {
            if (ans.question === this.props.questionId){
              if (ans.correct === 'True' || ans.correct === 'true') {
                return <div className='each-ans2' key={ans.id}>{ans.body}</div>;
              } else {
                return <div className='each-ans'  key={ans.id}>{ans.body}</div>;
              }
            }
          }) 
        }
      </div>
    );

    }
}