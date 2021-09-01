import React from 'react'
import PropTypes from 'prop-types';
import s from './FeedbackWidget.module.css'
const Notification = ({message }) => {
    return (
        <div className={s.notification}><p className={s.message}>{message}</p></div>
    )
}
export default Notification

Notification.propTypes = {
    message: PropTypes.string.isRequired

}