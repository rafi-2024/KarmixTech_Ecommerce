"use client";

import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-600">
        Something went wrong
      </p>
      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        An unexpected error occurred.
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        {error?.message ?? "Please try again later."}
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Back to homepage
      </Link>
    </div>
  );
}
