import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './FeedbackWidget.module.css';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statistics';
import FeedbackTitle from './FeedbackTitle';
import Notification from './Notification';

export default function FeedbackWidget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodIncrement = () => {
    setGood(state => state + 1);
  };
  const neutralIncrement = () => {
    setNeutral(state => state + 1);
  };
  const badIncrement = () => {
    setBad(state => state + 1);
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <div className={s.widget}>
      <h1>Feedback Widget </h1>

      <FeedbackTitle title="Please leave  feedback">
        <FeedbackOptions options={'good'} onLeaveFeedback={goodIncrement} />

        <FeedbackOptions
          options={'neutral'}
          onLeaveFeedback={neutralIncrement}
        />

        <FeedbackOptions options={'bad'} onLeaveFeedback={badIncrement} />
      </FeedbackTitle>

      <FeedbackTitle title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </FeedbackTitle>
    </div>
  );
}

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};
