import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import HomeContainer from './pages/home/HomeContainer';
import CatDetail from './pages/catDetail/CatDetail';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={ HomeContainer } />
      <Route path="/cat/:catId" exact component={ CatDetail } />
    </div>
  );
}

export default App;
