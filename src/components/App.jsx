import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import { AppContainer } from "./App.styled";
import Statistics from "./Statistics/Statistics";


export const App = () => {
  return (
    <AppContainer >
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
    </AppContainer>
  );
};

