import friends from './data/friends.json';
import user from './data/user.json';
import transactions from './data/transactions.json';
import statisticalData from './data/statistical-data.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
      <FriendsList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
