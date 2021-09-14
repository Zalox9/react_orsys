import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import { userListInitialState } from '../UserList/UserList';
import SelectUser from '../SelectUser/SelectUser';

export const FormMessageInitialState = {};

const FormMessage = (props) => {
  const [FormMessageState, setFormMessageState] = useState(FormMessageInitialState);
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      <SelectUser users={userListInitialState}></SelectUser>
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
