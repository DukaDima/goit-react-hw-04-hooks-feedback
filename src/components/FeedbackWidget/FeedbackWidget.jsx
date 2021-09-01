// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './FeedbackWidget.module.css';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statistics';
import FeedbackTitle from './FeedbackTitle';
import Notification from './Notification';

class FeedbackWidget extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
  };
  static propTypes = {};

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = Math.round((this.state.good / total) * 100);

    return (
      <div className={s.widget}>
        <h1>Feedback Widget </h1>

        <FeedbackTitle title="Please leave  feedback">
          <FeedbackOptions
            options={['good']}
            onLeaveFeedback={this.goodIncrement}
          />

          <FeedbackOptions
            options={'neutral'}
            onLeaveFeedback={this.neutralIncrement}
          />

          <FeedbackOptions
            options={'bad'}
            onLeaveFeedback={this.badIncrement}
          />
        </FeedbackTitle>

        <FeedbackTitle title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
}
export default FeedbackWidget;
