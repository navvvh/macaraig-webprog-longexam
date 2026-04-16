import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-900 focus:ring-0';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] font-bold uppercase tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-900">
        New Member
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-4 text-sm leading-6 text-zinc-600">
        Create a store account for faster checkout and student essentials.
      </p>

      <form className="mt-8 space-y-6 rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6 shadow-[8px_8px_0px_0px_rgba(30,58,138,1)]">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            className={inputClasses}
          />
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className={`${actionButtonClassName} bg-blue-900 text-white hover:bg-black`}
        >
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button 
            type="button" 
            variant="secondary" 
            className={`${actionButtonClassName} border-2 border-zinc-900 bg-white`}
          >
            Google
          </Button>
          <Button 
            type="button" 
            variant="secondary" 
            className={`${actionButtonClassName} border-2 border-zinc-900 bg-white`}
          >
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-10 border-t-2 border-zinc-100 pt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link 
          to="/auth/signin" 
          className="font-bold text-blue-900 underline decoration-2 underline-offset-4 transition hover:text-black"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;