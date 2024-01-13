import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
    </Router>
  );
}

export default App;
