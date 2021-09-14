import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';

export const FormMessageInitialState = {};

const FormMessage = (props) => {
  const [FormMessageState, setFormMessageState] = useState(FormMessageInitialState);
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      FormMessage Component
      {JSON.stringify(FormMessageState)}
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
