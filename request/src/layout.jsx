import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';


export default function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navigation />
      


          <Outlet />
      
    </div>
  );
}
