import { FunctionComponent, useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "core/context/UserContext";

const UserPage: FunctionComponent = () =>  {
  const { user, setUser } = useContext(UserContext);
  return(
    <>
      <div>User section!</div>
      {!user && <button onClick={() => setUser({ name: "Jonh Doe" })}>Log In!</button>}
    </>
  );

}

UserPage.propTypes = {
  user: PropTypes.object,
}

export default UserPage;