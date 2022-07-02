import { Link, useNavigate } from "react-router-dom";

interface INavbar {
    title: string;
    location?: string | undefined;
    match?: string | undefined;
}

export const Navbar = ({ title }: INavbar) => {
  const navigate = useNavigate();
  return (
    <>
      <div>{title}</div>
      <ul>
        <li>
          <button onClick={() => navigate("/", { replace: true })}>Home</button>
        </li>
        <li>
          <Link to="account/profile">Account</Link>
        </li>
      </ul>
    </>
  );
}

