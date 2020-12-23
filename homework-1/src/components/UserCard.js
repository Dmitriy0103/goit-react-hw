import React from 'react';
import propTypes from 'prop-types';
import '../style/userCard.scss';

 const UserCard = ({name, tag, location, avatar, statsFollowers, statsViews, statsLikes}) => (
    <div className="profile">
    <div className="description">
      <img className="avatar"
        src={avatar}
        alt="Аватар пользователя"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li className="items">
        <span className="label">Followers</span>
        <span className="quantity">{statsFollowers}</span>
      </li>
      <li className="items">
        <span className="label">Views</span>
        <span className="quantity">{statsViews}</span>
      </li>
      <li className="items">
        <span className="label">Likes</span>
        <span className="quantity">{statsLikes}</span>
      </li>
    </ul>
  </div>
 );

 UserCard.propTypes = {
   name: propTypes.string.isRequired,
   tag: propTypes.string.isRequired,
   location: propTypes.string.isRequired,
   avatar: propTypes.string,
   statsFollowers: propTypes.number.isRequired,
   statsViews: propTypes.number.isRequired,
   statsLikes: propTypes.number.isRequired,
 }
 
 export default UserCard;
