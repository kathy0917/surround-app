import { Outlet } from 'react-router-dom';
import { Navbar } from '../entities/Navbar';

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
