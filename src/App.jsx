// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import friends from "../src/friends.json";
import userData from "../src/userData.json";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/transactions.json';

export default function App() {
  return (
    <>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </>
  );
}

