import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User'

export const userListInitialState = [
  {
    id: 0,
    text: 'Dewey!',
    dateTime: new Date().toString(),
    user: {
      id: 0,
      nickname: 'Reese',
      img: 'https://th.bing.com/th/id/R.26304a6f409f4d70167301744e3a8a0b?rik=R3JKeWmKHrdpew&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f15400000%2fReese-malcolm-in-the-middle-15426321-100-100.jpg&ehk=4usyPf2kdRk9GiQjpjRCAjHsY4XFwy4XXdWvoMvqQvg%3d&risl=&pid=ImgRaw&r=0'
    }
  }, {
    id: 1,
    text: '??',
    dateTime: new Date().toString(),
    user: {
      id: 1,
      nickname: 'Dewey',
      img: 'https://th.bing.com/th/id/OIP.dJabLe2H0nsU0RhUivfbXgAAAA?pid=ImgDet&rs=1'
    }
  }
];

const UserList = (props) => {
  const [userListState, setUserListState] = useState(userListInitialState);
  return (
    <div className={styles.UserList} data-testid="UserList">
      UserList Component
      {
        userListState.map((e,i) => <User info={e} key={`user-${i}`} />)
      }
      {/* {JSON.stringify(userListState)} */}
    </div>
  )
};

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;
