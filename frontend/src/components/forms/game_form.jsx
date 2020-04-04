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
  }

startGameClick(e){
        e.preventDefault()
        this.props.startGame({form: this.props.form._id, user: this.props.currentUser.id})
          .then(result => {
          this.props.history.push(`/game/${result.game.data._id}`)
        })
    }

  render() {
    const scoreBoard = this.props.prevGames.map(game => (
          <li>
            {game.score}
            <br/>
            <GetUser user_id={game.user} />
          </li>
        ))
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
          
          <button onClick={this.startGameClick}>Start the Game</button>
            {/* <Link to={`/game/${this.props.game._id}`}>Go</Link> */}
           
          <div>
            <h2>ScoreBoard</h2>
            <ul>
              {scoreBoard}
            </ul>
          </div>
        </div>   
      </div>
    );
  }
}
