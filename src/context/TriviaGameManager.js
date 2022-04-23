class TriviaGameManager {
  questions = [];
  indexQuestion = 0;
  correctResultsCounter = 0;
  difficulty = 'easy';
  timer = 0;

  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  setQuestions = (questions) => {
    this.questions = questions;
  };

  setDifficulty = (difficulty) => {
    this.difficulty = difficulty;
    switch (difficulty) {
      case 'hard':
        this.timer = 60;
        break;
      case 'harder':
        this.timer = 30;
        break;
      default:
        this.timer = 0;
        break;
    }
  };

  setUserAnswerRight = (index) => {
    this.questions[index].user_answer_right = true;
  };

  increaseCorrectAnswersCounter = () => {
    this.correctResultsCounter++;
  };

  increaseQuestionIndex = () => {
    this.indexQuestion++;
  };

  checkAnswer = (userAnswer) => {
    return this.questions[this.indexQuestion].correct_answer === userAnswer;
  };

  resetTriviaGameManager = () => {
    this.questions = [];
    this.indexQuestion = 0;
    this.rightResults = [];
    this.difficulty = 'easy';
    this.timer = 0;
    this.correctResultsCounter = 0;
  };
}

export default TriviaGameManager;
