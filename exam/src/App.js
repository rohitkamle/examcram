import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';


import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import QuizPage from './pages/QuizPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <Router>
      <Routes>
        {!user && <Route path="/" element={<LoginPage onLogin={setUser} />} />}
        {user && !category && (
          <Route
            path="/categories"
            element={<CategoriesPage onSelectCategory={setCategory} />}
          />
        )}
        {user && category && (
          <Route
            path="/quiz"
            element={
              <QuizPage category={category} onGameEnd={(result) => console.log(result)} />
            }
          />
        )}
      </Routes>
    </Router>
  );
};
export default App;
