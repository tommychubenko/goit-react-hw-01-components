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
      <div>
        <SocialNetworkMarkup
          avatar={user.avatar}
          username={user.username}
          location={user.location}
          tag={user.tag}
          stats={user.stats}
        />
      </div>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {statData.map(data => (
            <StatDataMarkup
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </ul>
      </section>
      <ul className="friend-list">
        {FriendsList.map(friend => (
          <FriendsListMarkup
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionList.map(transaction => (
            <TransactionMarkup
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
