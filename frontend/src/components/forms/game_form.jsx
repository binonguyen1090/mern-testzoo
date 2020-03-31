import React from 'react';
import { Link } from 'react-router-dom';
import GetUser from '../user/get_user_container'

// import QuestionsIndex from "../questions/questions_index_container"

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
          <div>
            <h1>Ready To Play?</h1>
            <h1>{this.props.form.title}</h1>
            <h1>{this.props.form.category}</h1>
            <button onClick={this.startGameClick}>Start the Game</button>
            <Link to={`/game/${this.props.game._id}`}>Go</Link>
            <div>
              <button>
                <Link to={`/home`}>Back</Link>
              </button>
            </div>
            
            <div>
              <h2>ScoreBoard</h2>
              <ul>
                {scoreBoard}
              </ul>
            </div>
          </div>
        );
    }
}
