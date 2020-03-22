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
                 <li key={question._id}>
                   <div>
                     <Link to={`/questions/${question._id}`}>{question.text}</Link>
                     <div>
                       Difficulty:
                       {question.difficulty}
                     </div>
                   </div>
                   {/* <button>
                     <Link to={`/answers/${question._id}`}>Create Answers</Link>
                   </button> */}
                   <button onClick={this.handleClick} value={question._id}>
                     DELETE
                   </button>
                   {/* <AnswersIndexContainer
                     question={question}
                     questionId={question._id}
                   /> */}
                 </li>
               );
        }) 
        return <ul>{ques}</ul>;
    }
}
