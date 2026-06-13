import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              New Collection Available
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Everything You Need,
              <span className="block text-blue-600">
                Delivered Fast
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover premium products across electronics,
              fashion, home essentials, and more. Shop confidently
              with secure checkout and lightning-fast delivery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Shop Now
              </Link>

              <Link
                href="#categories"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Browse Categories
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-600">
              <span>✓ Secure Checkout</span>
              <span>✓ Fast Delivery</span>
              <span>✓ Easy Returns</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 rounded-2xl bg-white p-4 shadow-xl">
              <div className="text-sm font-semibold">
                ⭐ 4.9/5 Rating
              </div>
            </div>

            <div className="absolute -right-6 top-12 rounded-2xl bg-white p-4 shadow-xl">
              <div className="text-sm font-semibold">
                🚚 Free Shipping
              </div>
            </div>

            <div className="absolute bottom-8 -left-8 rounded-2xl bg-white p-4 shadow-xl">
              <div className="text-sm font-semibold">
                🛍️ 10,000+ Products
              </div>
            </div>

            <Image
              src="/images/hero/ecommerce-hero.png"
              alt="Shopping Experience"
              width={900}
              height={700}
              priority
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}