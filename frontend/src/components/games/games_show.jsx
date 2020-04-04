import React from "react"
import {Link} from "react-router-dom";
import GameQuestionsContainer from "./game_questions_container";
import './game_show.css'
export default class GameShow extends React.Component{
  constructor(props){
    super(props)
    this.getPoints = this.getPoints.bind(this)
  }

  componentDidMount(){
    this.props.fetchGame(this.props.gameId)
    if(this.props.formId !== ""){
      this.props.fetchForm(this.props.formId)
    }
  }

  handlePlusPoints(e){
      e.preventDefault()
      const points = this.props.game.score
      if (e.currentTarget.value === "true"){
          this.props.updateGame(this.props.gameId, {score: points+1})
      }
  }

  getPoints(e){
      e.preventDefault()
      this.props.fetchGame(this.props.gameId)
  }

  render(){
    return(
      <div className='gamepage'>
        <div className='gamestart-form'>
          <div id='current-score'>Current Score: {this.props.game.score} Correct</div>
          <br/>
          <GameQuestionsContainer handlePlus={this.handlePlusPoints} form={this.props.form} gameId={this.props.gameId} game={this.props.game}/>
          <div className='game-submit-holder'>
            <button className='game-submit' onClick={this.getPoints}>Submit Test</button>
          </div>
        </div>
        <Link to={`/games/forms/${this.props.formId}`}/>
        {/* <Link to={'/home'}/> */}
      </div>
    )
  }
}