import React from 'react';
import Quiz from './Quiz';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Home />
          <Route path='/quiz' component={Quiz} />
      </div>
    </BrowserRouter>
  );
}

export default App;
