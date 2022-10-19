import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import './index.css';

const Layout = () => {
  return (
    <div className='App'>
      <NavBar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
