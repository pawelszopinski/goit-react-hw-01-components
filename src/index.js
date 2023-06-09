import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/App';
import { Statistics } from 'components/App';
import { FriendList } from 'components/App';
import { TransactionHistory } from 'components/App';
import data from './components/data.json';
import friends from './components/friends.json'
import transactions from './components/transactions.json'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);
