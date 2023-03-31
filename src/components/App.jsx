import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";
import { AppContainer } from "./App.styled";


export const App = () => {
  return (
    <AppContainer>
      <Profile user={user} />
    </AppContainer>
  );
};
