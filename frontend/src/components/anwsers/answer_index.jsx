import React from "react";

export default class AnswersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.questionId !== "") {
      this.props.fetchQuestionAnswers(this.props.questionId);
    }
  }
  handleClick(e) {
    e.preventDefault();
    const answerId = e.currentTarget.value;
    this.props.destroyAnswer(answerId).then(() => {
      this.props.fetchQuestionAnswers(this.props.questionId);
    });
  }

  render() {
    return (
      <div className="answers-box2">
        {this.props.answers.map((ans, idx) => {
          if (ans.question === this.props.questionId) {
            if (ans.correct === "True" || ans.correct === "true") {
              return (
                <div className="each-ans2" key={idx}>
                  {ans.body}
                  <div id="form-footer">
                    <button onClick={this.handleClick} value={ans._id}>
                      Delete?
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="each-ans" key={idx}>
                  {ans.body}

                  <div id="form-footer">
                    <button onClick={this.handleClick} value={ans._id}>
                      Delete?
                    </button>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    );
  }
}
