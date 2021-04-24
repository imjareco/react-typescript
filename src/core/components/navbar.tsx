import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

interface INavbar {
    title: string;
    location?: string;
    match?: string;
}

export const Navbar: FunctionComponent<INavbar> = ({ title }) => {
  const history = useHistory();
  return (
    <>
      <div>{title}</div>
      <ul>
        <li>
          <button onClick={() => history.push("/")}>Home</button>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  match: PropTypes.string,
}

