import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../components/pages/HomePage';
import QuizPage from '../components/pages/QuizPage';
import ResultsPage from '../components/pages/ResultsPage';

export const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/quizpage" exact component={QuizPage} />
        <Route path="/resultspage" exact component={ResultsPage} />
      </Switch>
    </Router>
  );
}
