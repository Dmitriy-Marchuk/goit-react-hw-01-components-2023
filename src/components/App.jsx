import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import transactions from "./TransactionHistory/transactions.json"
import friends from "./FriendList/friends.json"
import { AppContainer } from "./App.styled";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <AppContainer >
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};

