import React from 'react';
import './App.css';
import FeedbackWidget from './components/FeedbackWidget/FeedbackWidget';

function App() {
  return (
    <>
      <FeedbackWidget defaultGood={0} defaultNeutral={0} defaultBad={0} />
    </>
  );
}

export default App;
