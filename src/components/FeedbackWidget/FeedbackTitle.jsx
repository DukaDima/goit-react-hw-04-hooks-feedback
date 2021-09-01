import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackWidget.module.css';
const FeedbackTitle = ({ title, children }) => {
  return (
    <div className={s.FeedbackTitle}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

export default FeedbackTitle;
FeedbackTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
