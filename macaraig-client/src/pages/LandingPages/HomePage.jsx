import Button from '../../components/Button';
import banner from '../../assets/img/max.jpg';
import Lanyard from '../../assets/img/Lanyard.png';
import NUNA from '../../assets/img/NUNA.webp';
import Scarf from '../../assets/img/Scarf.webp';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6 bg-white">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-black px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-800/10" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300 [-webkit-text-stroke:0.3px_#1e3a8a]">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-50 sm:text-4xl [-webkit-text-stroke:2px_#1e3a8a]">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 font-black lowercase tracking-tighte text-zinc-100 sm:text-base [-webkit-text-stroke:0.6px_#1e3a8a]">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6 ">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
                    <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                        <p className="text-2xl font-bold text-white">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                        <p className="text-2xl font-bold text-white">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                        <p className="text-2xl font-bold text-white">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-5">
                        <p className="text-2xl font-bold text-white">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3 bg-blue-900 p-4 rounded-3xl border-2 border-zinc-900">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem]">
                            <img src={Lanyard} alt="" className="rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                        </div>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img src={NUNA} alt="" className="rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">National University Stickers</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Volleyball, Basketball, Stickers
                        </p>
                        <div className="mt-4 flex justify-center">
                            <Button to="/products" className="mt-4" variant="primary">Shop Stickers</Button>
                        </div>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                            <img src={Scarf} alt="" className="rounded-[1.25rem]" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <Button to="/products" className="mt-4" variant="primary">View Apparel</Button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
