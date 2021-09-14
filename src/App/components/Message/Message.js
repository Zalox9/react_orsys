import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = (props) => (
  <div className={styles.Message} data-testid="Message">
    <img src={props.message.user.img} />
    <div>
      <div className={styles.messageHeader}>
        <strong>{props.message.user.nickname}</strong> : {props.message.dateTime}
      </div>
      <div className={styles.message}>
        say : {props.message.text}
      </div>
    </div>
  </div>
);

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
