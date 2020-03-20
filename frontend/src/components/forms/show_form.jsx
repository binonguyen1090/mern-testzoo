

import React from 'react';
import { Link } from 'react-router-dom';

export default class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            questions: this.props.questions
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchForm(this.props.form_id);

        this.props.fetchQuestions(this.props.form_id)
    }


    handleClick(e){
        e.preventDefault()
        const quesId = e.currentTarget.value
        this.props.destroyQuestion(this.props.form._id, quesId)
        return(
            this.forceUpdate()
        )
    }

    render() {
         const ques = this.props.questions.map(question => {
             if (question.form === this.props.form_id) {
                return (<li>
                    {question.text}
                    {question.difficulty}
                    <button onClick={this.handleClick} value={question._id}>DELETE</button>
                </li>
                )}
            }) 

        return (
          <div>
            <h1>Show Forms</h1>
            <h1>{this.props.form.title}</h1>
            <h1>{this.props.form.category}</h1>
            <ul>{ques}</ul>
            <div>
              <Link to={`/questions`}>Create Questions</Link>
              {/* <Link to={`/answers`}>Create Answer</Link> */}
              <button>
                <Link to={`/users/${this.props.currentUserID}`}>Back</Link>
              </button>
            </div>
          </div>
        );
    }
}
