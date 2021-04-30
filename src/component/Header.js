import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <h1>The Blogs</h1>
      <div className="links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/create">New Blog</NavLink>
      </div>
    </nav>
  );
}

export default Header;
