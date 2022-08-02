import SocialNetworkMarkup from './user-card-markup';
import user from './data/user.json';
import StatDataMarkup from './stat-data-markup';
import statData from './data/data.json';
import FriendsList from './data/friends.json';
import FriendsListMarkup from './friends-markup';
import transactionList from './data/transactions.json';
import TransactionMarkup from './transaction-markup';

export const App = () => {
  return (
    <div className="wrapper">
      <SocialNetworkMarkup props={user} />
      <StatDataMarkup props={statData} title={'Upload stats'} />
      <FriendsListMarkup props={FriendsList} />
      <TransactionMarkup props={transactionList} />
    </div>
  );
};
