import { UserContext } from "core/context/UserContext";
import { FunctionComponent, useContext } from "react";

const HomePage: FunctionComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>Home section!</div>
      <div>{user ? `${user.name} is logged!` : "No user"}</div>
    </>
  );
}

export default HomePage;