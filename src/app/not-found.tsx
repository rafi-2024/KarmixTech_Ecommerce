import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        The link may be broken or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
