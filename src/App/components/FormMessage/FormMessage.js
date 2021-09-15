import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import SelectUser from '../SelectUser/SelectUser';
import MessageInput from '../MessageInput/MessageInput';
import Button from '../Button/Button'
import store, { initialState, ACTIONS } from '../../store/store';

export const FormMessageInitialState = {
  text: 'new text',
  destId: 0
};


const FormMessage = (props) => {
  const [FormMessageState, setFormMessageState] = useState(FormMessageInitialState);
  const [UserListInitialState, setUserListInitialState] = useState(initialState.users);
  useEffect(()=> {
    setUserListInitialState(store.getState().tchat.users) //init
    store.subscribe(()=>{
      setUserListInitialState(store.getState().tchat.users)
    })
  },[])
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(FormMessageState)}
      <form onSubmit={(evt) => {
        evt.preventDefault(); //empeche le rechargement de la page
        store.dispatch({type:ACTIONS.SAVE_MSG,value:{...FormMessageInitialState, dateTime:new Date().toString()}});
      }}>
        <MessageInput value={FormMessageState.text} onChange={(evt) => { setFormMessageState({ ...FormMessageState, text: evt.target.value }) }}></MessageInput>
        <SelectUser value={FormMessageState.destId} users={UserListInitialState} onChange={(evt) => setFormMessageState({ ...FormMessageState, destId: Number(evt.target.value) })}></SelectUser>
        <Button type="submit">Envoyer</Button>
      </form>
    </div>
  )
};

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
