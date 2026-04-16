import { Link } from 'react-router-dom';
import Button from '../../components/Button';


const inputClasses =
  'mt-2 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-900 focus:ring-0';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] font-bold uppercase tracking-[0.2em]';

const SignInPage = () => {
  return (
    <div className="flex flex-col">
    
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-900">
        Member Access
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Log In
      </h1>
      <p className="mt-4 text-sm leading-6 text-zinc-600">
        Access your store account to review orders and student essentials.
      </p>

      
      <form className="mt-8 space-y-6 rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 shadow-[8px_8px_0px_0px_rgba(30,58,138,1)]">
        <div>
          <label htmlFor="signin-email" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-tight">
          <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-blue-900" />
            <span>Remember me</span>
          </label>
          <button type="button" className="text-blue-900 transition hover:text-zinc-900">
            Forgot?
          </button>
        </div>

        {/* Bulldog Blue Primary Button */}
        <Button type="submit" variant="primary" className={`${actionButtonClassName} bg-blue-900 text-white hover:bg-black`}>
          Sign In
        </Button>

        
        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={`${actionButtonClassName} border-2 border-zinc-900 bg-white`}>
            Google
          </Button>
          <Button type="button" variant="secondary" className={`${actionButtonClassName} border-2 border-zinc-900 bg-white`}>
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-10 border-t-2 border-zinc-100 pt-6 text-sm text-zinc-600">
        New to the shop?{' '}
        <Link to="/auth/signup" className="font-bold text-blue-900 underline decoration-2 underline-offset-4 transition hover:text-black">
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;