import React from "react";


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
               return (<li>
                   {question.text}
                   {question.difficulty}
                   <button onClick={this.handleClick} value={question._id}>DELETE</button>
               </li>
               )
        }) 
        return (
            <ul>
                {ques}
            </ul>
        );
    }
}