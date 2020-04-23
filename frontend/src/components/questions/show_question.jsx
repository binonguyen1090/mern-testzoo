import React from "react";
import AnswersIndexContainer from "../anwsers/answer_index_container";
import { Link } from "react-router-dom";
import './show_q.css'
export default class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuestion(this.props.question_id);
  }

//   handleClick(e) {
//     e.preventDefault();
//     const quesId = e.currentTarget.value;
//     this.props.destroyQuestion(quesId);
//   }

  render() {
    const {question} = this.props
  // const ques = this.props.questions.map(question => {
    return (
      <div className="show-q">
        <Link className="back-btn2" to={`/forms/${question.form}`}>
          Go Back
        </Link>
        <div className="q-show">
          <strong>Q: {question.text}</strong>
          <div className='questionediting'>
            <Link className="create-ans" to={`/answers/${question._id}`}>
              Create A New Answer
            </Link>
            <Link className='create-ans' to={`/questions/${question._id}/edit`}>
              Edit Question
            </Link>
          </div>

          <div id="answers-holder">Answers:</div>
          <div className="answers-box" key={question._id}>
            <AnswersIndexContainer
              question={question}
              questionId={question._id}
            />
          </div>
        </div>
      </div>
    );
    //     <li key={question.id}>
    //       <div>
    //         <Link to={`/questions/${question.id}`}>{question.text}</Link>
    //         <div>
    //           Difficulty:
    //           {question.difficulty}
    //         </div>
    //       </div>
    //       {/* <button>
    //                  <Link to={`/answers/${question._id}`}>Create Answers</Link>
    //                </button> */}
    //       <button onClick={this.handleClick} value={question._id}>
    //         DELETE
    //       </button>
    //       {/* <AnswersIndexContainer
    //                  question={question}
    //                  questionId={question._id}
    //                /> */}
    //     </li>
    //   );
    // });
    // return <ul>{ques}</ul>;
  }
}
