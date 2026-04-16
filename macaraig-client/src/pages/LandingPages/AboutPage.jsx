import Button from '../../components/Button';
import Campus from '../../assets/img/Campus.jpg';
import shirt from '../../assets/img/shirt.webp';
import cap from '../../assets/img/cap.webp';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-black">
      <section className="border-y-2 border-blue-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2  border-white bg-blue-900 p-5">
            <img src={Campus} alt="BulldogEx" className="w-full h-full object-cover" />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-white bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-white">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-white">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white ">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-white">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-white">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                <h3 className="text-lg font-semibold text-white">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-white">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                <h3 className="text-lg font-semibold text-white">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-white">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                <h3 className="text-lg font-semibold text-white">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-white">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img src={shirt} alt="Shirt" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img src={cap} alt="Cap" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img src={shirt} alt="Shirt" />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img src={cap} alt="Cap" />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Button to="/products" className="mt-5">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
