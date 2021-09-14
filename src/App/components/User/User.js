import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

const User = (props) => (
  <div className={styles.User} data-testid="User">
    <div >
      <img className={styles.round} src={props.info.user.img} />
      {props.info.user.nickname}
    </div>
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
