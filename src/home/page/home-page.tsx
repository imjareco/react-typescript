import { FunctionComponent, useContext } from "react";
import { UserContext } from "core/context/UserContext";
import useBoolean from "hooks/useBoolean";
import Sidebar from "core/components/Sidebar";

const HomePage: FunctionComponent = () => {
  const { user } = useContext(UserContext);
  const [isOpen, { on: openModal, off: closeModal }] = useBoolean(false);

  return (
    <>
      <div>Home section!</div>
      <div>{user ? `${user.name} is logged!` : "No user"}</div>
      <br/>

      <button onClick={openModal}>Open Modal!</button>
      <Sidebar open={isOpen} onClose={closeModal}>
        <div>This is the sidebar content!</div>
      </Sidebar>
    </>
  );
}

export default HomePage;