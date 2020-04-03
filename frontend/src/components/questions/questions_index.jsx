import React from "react";
import AnswersIndexContainer from "../anwsers/answer_index_container";
import { Link } from "react-router-dom";


export default class QuestionsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.fetchQuestions(this.props.formId)
    }

    handleClick(e){
        e.preventDefault()
        const quesId = e.currentTarget.value
        this.props.destroyQuestion(quesId)
    }

  render() {
    const ques = this.props.questions.map(question => {
      return (
        <div className='question-item' key={question._id}> 
        
          <Link className='question-link' to={`/questions/${question._id}`}>
            {question.text}
          
            <div className='question-footer'>
              <div>Difficulty: {question.difficulty}</div>           
              <button onClick={this.handleClick} value={question._id}>
                DELETE
              </button>
            </div>
          </Link>
          {/* <AnswersIndexContainer
            question={question}
            questionId={question._id}
          /> */}
        </div>
      );
    }) 
    return <div className='all-questions'>{ques}</div>;
  }
}
