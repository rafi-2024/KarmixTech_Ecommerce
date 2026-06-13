import Link from "next/link";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
];

export default function HeroContent() {
  return (
    <div>
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
        New Products Added Daily
      </span>

      <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
        Shop Smarter.
        <span className="block text-blue-600">
          Live Better.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Discover thousands of quality products across
        electronics, fashion, home essentials, and beauty
        with secure checkout and fast delivery.
      </p>

      {/* Category Pills */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/products"
          className="rounded-xl text-white bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
        >
          Shop Products
        </Link>

        <Link
          href="#categories"
          className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Browse Categories
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 grid grid-cols-2 gap-4 text-sm font-medium text-slate-600 md:grid-cols-4">
        <span>✓ Secure Checkout</span>
        <span>✓ Fast Delivery</span>
        <span>✓ Easy Returns</span>
        <span>✓ 24/7 Support</span>
      </div>

      {/* Social Proof */}
      <div className="mt-10 flex items-center gap-4">
        <div className="text-yellow-500 text-xl">
          ★★★★★
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Trusted by 10,000+ Customers
          </p>

          <p className="text-sm text-slate-500">
            Growing every day
          </p>
        </div>
      </div>
    </div>
  );
}