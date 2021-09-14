import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';
import Message from '../Message/Message';


export const messageListInitialState = [
  {
    id: 0,
    text: 'Voici le message',
    dateTime: new Date().toString(),
    user: {
      id: 0,
      nickname: 'Zalox',
      img: ''
    }
  }, {
    id: 1,
    text: 'Voici le message2',
    dateTime: new Date().toString(),
    user: {
      id: 1,
      nickname: 'Dewey',
      img: ''
    }
  }
];

const MessageList = (props) => {
  const [messageListState, setMessageListState] = useState(messageListInitialState);
  return (
    <div className={styles.MessageList} data-testid="MessageList">
      MessageList Component
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {
          messageListState.map((e, i) => <Message message={e} key={`mess-${i}`} />)
        }
      </div>
      
      {/* {JSON.stringify(messageListState)} */}
    </div>
  )
};

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;
