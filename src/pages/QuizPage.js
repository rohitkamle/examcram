import { useState } from 'react';
import { motion } from 'framer-motion';
import { fetchQuestions } from '../services/api'; // API to fetch random questions

const QuizPage = ({ category, onGameEnd }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions(category.id);
      setQuestions(data);
    };
    loadQuestions();
  }, [category]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestion + 1 === questions.length) {
        // Game success
        onGameEnd('success');
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      // Game over
      onGameEnd('fail');
    }
  };

  return (
    <div className="quiz-page">
      {questions.length > 0 && (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>{questions[currentQuestion].question}</h2>
          <img src={questions[currentQuestion].image} alt="Question" />
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleAnswer(option.isCorrect)}
            >
              {option.text}
            </motion.button>
          ))}
        </motion.div>
      )}

      {showHint && (
        <motion.div className="hint">
          <p>{questions[currentQuestion].hint}</p>
        </motion.div>
      )}

      <button onClick={() => setShowHint(!showHint)}>Show Hint</button>
    </div>
  );
};
export default QuizPage;
