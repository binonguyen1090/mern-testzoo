import React from "react";
import { Link } from "react-router-dom";
import GameQuestionsContainer from "./game_questions_container";
import "./game_show.css";
export default class GameShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        score: 0
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
    const points = this.props.game.score;
    if (e.currentTarget.value === "true") {
      this.props.updateGame(this.props.gameId, { score: points + 1 });
    }
  }

  getPoints(e) {
    e.preventDefault();
    this.props.fetchGame(this.props.gameId)
        // .then(result => console.log(result.game.data.score))
        .then(result => this.setState({
            score: result.game.data.score / this.props.questions.length * 100
        }))
    // this.props.history.push(`/games/forms/${this.props.formId}`);
  }

  render() {
    return (
      <div className="gamepage">
        <div className="gamestart-form">
          <div id="current-score">
            Current Score: {this.state.score} %
          </div>
          <br />
          <GameQuestionsContainer
            handlePlus={this.handlePlusPoints}
            form={this.props.form}
            gameId={this.props.gameId}
            game={this.props.game}
          />
          <div className="game-submit-holder">
            <button className="game-submit" onClick={this.getPoints}>
              Submit Test
            </button>
            <Link to={`/games/forms/${this.props.formId}`}>Go back</Link>
          </div>
        </div>
      </div>
    );
  }
}
