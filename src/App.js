import Section from "./components/Section/Section";
import Profile from "./components/Profile/Profile";
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from './json/user.json'
import data from './json/data.json'
import friends from './json/friends.json'
import transactions from './json/transactions.json'

function App() {
  return (
    <div>
      <Section>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>

    </div>
  );
}
export default App