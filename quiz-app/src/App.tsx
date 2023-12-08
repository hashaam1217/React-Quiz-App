import React, {useState} from 'react';
import {fetchQuizQuestions} from './API';

//Components
import QuestionCard from './components/QuestionCard';

//types
import { Difficulty } from './API';
const TOTAL_QUESTIONS = 10;

const App = () => {


    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY ))
    //To run at the start of the app
    const startTrivia = async () => {

    }

    //To check the answer on mouse event
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

  return (
  <div className="App">
    <h1>REACT QUIZ</h1>
    <button className="start" onClick={startTrivia}>
        Start
    </button>
    <p className="score">Score:</p>
    <p>Loading Questions...</p>
    {/*
    <QuestionCard 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        questions={questions[number].question}
        answers={questions[number].answers}
        userAnswers={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
    />
    */}
    <button className="next" onClick={nextQuestion}>
        Next Question
    </button>
  </div>
  );
  }

export default App;
