import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 items-center justify-center min-h-screen">
      
      <section className="w-full border-y-2 border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8 flex justify-center">
        <div className="max-w-3xl flex flex-col items-center text-center">
          
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Error
          </p>

          <h1 className="text-6xl font-bold leading-tight text-blue-500 sm:text-7xl">
            404
          </h1>

          <p className="mt-4 text-lg leading-7 text-white">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6 flex gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>

        </div>
      </section>

      <section className="w-full border-y-2 border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Quick Links
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Explore the site
          </h2>

          <div className="mt-6 space-y-3 w-full max-w-md">
            
            <div className="rounded-3xl border-2 border-zinc-900 bg-black p-4">
              <h3 className="font-semibold text-white">Home</h3>
              <p className="mt-1 text-sm text-white">
                Return to the homepage
              </p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>

            <div className="rounded-3xl border-2 border-zinc-900 bg-black p-4">
              <h3 className="font-semibold text-white">Products</h3>
              <p className="mt-1 text-sm text-white">
                Browse all featured store items
              </p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default NotFoundPage