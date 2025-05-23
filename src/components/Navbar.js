import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {username ? (
        <>
          <Link to="/upload">Upload</Link>
          <button onClick={logout}>Logout ({username})</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
