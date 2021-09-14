import React from 'react';
import FlexContainer from '../FlexContainer/FlexContainer';
import FormMessage from '../FormMessage/FormMessage';
import MessageList from '../MessageList/MessageList';
import SelectUser from '../SelectUser/SelectUser';
import UserList from '../UserList/UserList';
import styles from './Tchat.module.scss';

const Tchat = () => (
  <div className={styles.Tchat} data-testid="Tchat">
    <FlexContainer type="horizontal" style={{ height: "98vh"}}>
      {/* partie supérieur */}
      <FlexContainer type="vertical" >
        <MessageList />
        <UserList />
      </FlexContainer>
      {/* partie inférieur */}
      <FormMessage>
      </FormMessage>
    </FlexContainer>
  </div>
);

Tchat.propTypes = {};

Tchat.defaultProps = {};

export default Tchat;
