import SocialNetworkMarkup from './user-card-markup';
import user from './user.json';
import StatDataMarkup from './stat-data-markup';
import statData from './data.json';
import FriendsList from './friends.json';
import FriendsListMarkup from './friends-markup';
import transactionList from './transactions.json';
import TransactionMarkup from './transaction-markup';

export const App = () => {
  return (
    <div className="wrapper">
      <SocialNetworkMarkup props={user} />
      <StatDataMarkup props={statData} />
      <FriendsListMarkup props={FriendsList} />
      <TransactionMarkup props={transactionList} />
    </div>
  );
};
