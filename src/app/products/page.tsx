import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900">
        Products
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        This page will display product browsing once the catalog page is implemented.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
