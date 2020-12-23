import React from 'react';



const FriendsList = ({friends}) => (
    <ul className='friend-list'>
        {friends.map(({id, avatar, name, isOnline}) => (
         <li className="user-item" key={id}>
             {isOnline === true ? (
                 <span className="status online"></span>
             ) : (<span className="status ofline"></span>)}
         {/* <span className="status">{isOnline}</span> */}
         <img className="user-avatar" src={avatar} alt="" width="48" />
        <p className="user-name">{name}</p>
       </li>
        ))}
</ul>
);

export default FriendsList;