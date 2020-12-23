import React from 'react';
import Statistics from './components/Statistics';
import UserCard from './components/UserCard';
import FriendsList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <div>
      <UserCard
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  statsFollowers={user.stats.followers}
  statsViews={user.stats.views}
  statsLikes={user.stats.likes}
/>
     <Statistics 
  title="Upload stats" 
  stats={statisticalData}
/>
     <FriendsList 
  friends={friends}
/>
     <TransactionHistory 
  items={transactions}
/>
    </div>
  );
}

export default App;
