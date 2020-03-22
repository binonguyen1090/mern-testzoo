import React from "react";
import AnswersIndexContainer from "../anwsers/answer_index_container";
import { Link } from "react-router-dom";

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
        <div>
          Question Show
          <div>{question.text}</div>
          <ul key={question._id}>
            <li key={question._id}>
              <AnswersIndexContainer
                     question={question}
                     questionId={question._id}
                   />
            </li>
          </ul>
          <button>
            <Link to={`/answers/${question._id}`}>
              Create Answers
            </Link>
          </button>
          <button>
              <Link to={`/forms/${question.form}`}>
                Back
              </Link>
          </button>
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
