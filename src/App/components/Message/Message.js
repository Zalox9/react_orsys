import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = () => (
  <div className={styles.Message} data-testid="Message">
    Message Component
  </div>
);

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
