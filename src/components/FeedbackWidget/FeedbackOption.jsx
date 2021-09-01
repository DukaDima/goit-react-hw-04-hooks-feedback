import React from 'react'
import PropTypes from 'prop-types';
import s from './FeedbackWidget.module.css'
const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
           <>
             <button className={s.button} type="button" onClick={onLeaveFeedback}>{options}</button>
            </>
    )
}
export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback:PropTypes.func.isRequired
}
