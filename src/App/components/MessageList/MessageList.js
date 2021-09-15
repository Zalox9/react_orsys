import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';
import Message from '../Message/Message';
import store, { initialState } from '../../store/store'


// export const messageListInitialState = [
//   {
//     id: 0,
//     text: 'Dewey!',
//     dateTime: new Date().toString(),
//     user: {
//       id: 0,
//       nickname: 'Reese',
//       img: 'https://th.bing.com/th/id/R.26304a6f409f4d70167301744e3a8a0b?rik=R3JKeWmKHrdpew&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f15400000%2fReese-malcolm-in-the-middle-15426321-100-100.jpg&ehk=4usyPf2kdRk9GiQjpjRCAjHsY4XFwy4XXdWvoMvqQvg%3d&risl=&pid=ImgRaw&r=0'
//     }
//   }, {
//     id: 1,
//     text: '??',
//     dateTime: new Date().toString(),
//     user: {
//       id: 1,
//       nickname: 'Dewey',
//       img: 'https://th.bing.com/th/id/OIP.dJabLe2H0nsU0RhUivfbXgAAAA?pid=ImgDet&rs=1'
//     }
//   }
// ];

const MessageList = (props) => {
  const [messageListState, setMessageListState] = useState(initialState.messages);
  const [usersListState, setUsersListState] = useState(initialState.users);

  useEffect(() => {
    setMessageListState(store.getState().tchat.messages) //initialise
    setUsersListState(store.getState().tchat.users)
    store.subscribe(() =>{
      setMessageListState(store.getState().tchat.messages) //met a jour
      setUsersListState(store.getState().tchat.users)
    })
  }, []);
  return (
    <div className={styles.MessageList} data-testid="MessageList">
      MessageList Component
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {
          messageListState.map((e, i) =>{
            const uu=usersListState.find((u)=>e.userId===u.id);
          return <Message message={
            {...e, user:uu?uu:{}}}
            key={`mess-${i}`} />
        })
      }
      </div>

      {/* {JSON.stringify(messageListState)} */}
    </div>
  )
};

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;
