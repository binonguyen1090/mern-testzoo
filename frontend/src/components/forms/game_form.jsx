import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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
      this.props.startGame({form: this.props.form._id, user: this.props.currentUser.id});
      // return <Redirect to={`/game/${this.props.game._id}`}>Go</Redirect>
      // this.props.history.push(`/game/${this.props.game._id}`);
      document.querySelector('.game-ready').style.display = 'none';
      document.querySelector('.startgame-btn').style.display = 'flex';
      
    }

  render() {
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
          <div className='game-ready'>
            <h3>Ready to take this test?</h3>
            <button onClick={this.startGameClick}>YES!</button>
            <Link id='no-link' to={`/home`}>NO :(</Link>
          </div>
          <Link className='startgame-btn' to={`/game/${this.props.game._id}`}>Click to Begin!</Link>
        </div>
      </div>
    );
  }
}
