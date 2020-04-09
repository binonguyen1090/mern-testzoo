import React from 'react';

import { Link } from 'react-router-dom';
import GetUser from '../user/get_user_container'


// import QuestionsIndex from "../questions/questions_index_container"
import './game_form.css'
export default class GameForm extends React.Component {
  constructor(props) {
      super(props);
      this.startGameClick = this.startGameClick.bind(this)
  }

  componentDidMount() {
      this.props.fetchForm(this.props.form_id);
      this.props.fetchGames(this.props.form_id);
      this.props.fetchQuestions(this.props.form_id)
  }

startGameClick(e){
        e.preventDefault()
        this.props.startGame({form: this.props.form._id, user: this.props.currentUser.id})
          .then(result => {
          this.props.history.push(`/game/${result.game.data._id}`)
        })
    }

  render() {
    let scoreBoard;
    let allQuest = this.props.questions.length
    if (this.props.prevGames instanceof Array){
      if (this.props.prevGames.length < 1) {
        scoreBoard = [1].map(i => (
          <span>No one has attempted this test yet, be the first!</span>
        ))
      } else {
        scoreBoard = this.props.prevGames.slice(0, 12).map(game => (
          <div id='scores-item'>
            <div id='score-item-user'>
              <GetUser user_id={game.user} />
            </div>
            <div id='score-item-score' >
              {game.score / allQuest * 100}
            </div>
            <p>%</p>
          </div>
        ))}
      } else {
        scoreBoard = []
      }

    return (
      <div className="create-game">
        <Link className="back-btn" to={`/home`}>
          Go Back
        </Link>
        <div className="game-form">
          <div id='game-form-top'>
            <strong>{this.props.form.title}</strong>
            <div id="game-cat">Category: {this.props.form.category}</div>
          </div>
          <div id='button-holder'>
            <button onClick={this.startGameClick}>Click to take this test!</button>
          </div>
          
            {/* <Link to={`/game/${this.props.game._id}`}>Go</Link> */}
           
          <div className='prev-attempts'>
            <h2>Previous attempts by users:</h2>
            <div id='scoreboard'>
              {scoreBoard}
            </div>
          </div>
        </div>   
      </div>
    );
  }
}
