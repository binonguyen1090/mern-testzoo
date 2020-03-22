import React from "react";

export default class AnswersIndex extends React.Component{
    constructor(props){
        // debugger
        super(props)
    }

    componentDidMount(){
        // debugger
        if (this.props.questionId !== ""){
          this.props.fetchQuestionAnswers(this.props.questionId);
        }
    }

    render(){
        // debugger
        
        return (
          <div>
            Answer:
            <ul>
                {
                    this.props.answers.map(ans => {
                        if (ans.question === this.props.questionId){
                            return <li key={ans.id}>{ans.body}</li>;
                        }

                    }
                        
                    )
                    
                }
                
            </ul>
          </div>
        );

    }
}