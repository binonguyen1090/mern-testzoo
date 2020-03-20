import React from "react";


export default class QuestionsShow extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount(){
    //     this.props.fetchQuestions()
    // }

    render() {
        // const ques = this.props.questions.map(question => (
        //     <li>
        //         {question.text}
        //         {question.difficulty}
        //     </li>
        // ))
        return (
            <div>
                Here is one question
            </div>
        );
    }
}