import React from "react";
import { Link } from "react-router-dom";
import GameQuestionsContainer from "./game_questions_container";
import "./game_show.css";
export default class GameShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        finalScore: 0
    }
    this.getPoints = this.getPoints.bind(this);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.gameId);
    if (this.props.formId !== "") {
      this.props.fetchForm(this.props.formId);
    }
    this.props.fetchQuestions(this.props.formId)
  }

  handlePlusPoints(e) {
    e.preventDefault();
    // document.getElementById(`${this.props.questionId}`).style.display = 'none'
    const points = this.props.game.score;
    if (e.currentTarget.value === "true" || e.currentTarget.value === 'True') {
      this.props.updateGame(this.props.gameId, { score: points + 1 });
    }
  }

  getPoints(e) {
    e.preventDefault();
    this.props.fetchGame(this.props.gameId)
        // .then(result => console.log(result.game.data.score))
        .then(result => this.setState({
          finalScore: result.game.data.score / this.props.questions.length * 100
        }))
        document.querySelector('.game-submit2').style.display = 'flex'
        document.querySelector('.game-submit').style.display = 'none'
        document.querySelector('#current-score').style.display = 'flex'
        document.querySelector('#gamepage-p').style.display = 'flex'
        document.querySelector('.all-game-qs').style.display = 'none'

    // this.props.history.push(`/games/forms/${this.props.formId}`);
  }

  render() {
    return (
      <div className="gamepage">
        <div className="gamestart-form">
          <div id='current-score'>You scored {this.state.finalScore} % </div>
          <p id='gamepage-p'>Feel free to compare your score with other users' scores (or try again) after exiting!</p>
          <br />
          <div className='all-game-qs'>
            <GameQuestionsContainer
              handlePlus={this.handlePlusPoints}
              form={this.props.form}
              gameId={this.props.gameId}
              game={this.props.game}
            />
          </div>
          <div className="game-submit-holder">
            <button className="game-submit" onClick={this.getPoints}>
              Get your score!
            </button>
            <Link className='game-submit2' to={`/games/forms/${this.props.formId}`}>Click to Exit</Link>
          </div>
        </div>
      </div>
    );
  }
}
