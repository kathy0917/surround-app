import { Outlet } from 'react-router-dom';
import { Navbar } from '../entities/index';

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
