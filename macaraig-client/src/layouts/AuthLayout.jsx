import { Outlet } from 'react-router-dom';
import national from '../assets/img/national.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <div className="hidden lg:flex items-center justify-center bg-black border-r-2 border-blue-900">
          <img src={national} alt="National University" className="" />
        </div>

        <main className="flex items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;