// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DetailMovie from './Pages/DetailMovie';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={DetailMovie} />
        </div>
      </Router>
    </div>
  );
};

export default App;
