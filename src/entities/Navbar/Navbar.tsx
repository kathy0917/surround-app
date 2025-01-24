import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/category">Category</Link>
      <Link to="/">Home</Link>
      <Link to="/my">My</Link>
    </nav>
  );
}
