import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import { userListInitialState } from '../UserList/UserList';
import SelectUser from '../SelectUser/SelectUser';
import MessageInput from '../MessageInput/MessageInput';
import Button from '../Button/Button'

export const FormMessageInitialState = {
  text: 'new text',
  destId: 0
};

const FormMessage = (props) => {
  const [FormMessageState, setFormMessageState] = useState(FormMessageInitialState);
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(FormMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault(); //empeche le rechargement de la page
      }}>
        <MessageInput value={FormMessageState.text} onChange={(evt) => { setFormMessageState({ ...FormMessageState, text: evt.target.value }) }}></MessageInput>
        <SelectUser value={FormMessageState.destId} users={userListInitialState} onChange={(evt) => setFormMessageState({ ...FormMessageState, destId: Number(evt.target.value) })}></SelectUser>
        <Button type="submit">Envoyer</Button>
      </form>
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
