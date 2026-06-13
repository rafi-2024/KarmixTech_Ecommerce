import { db } from "@/lib/db";
import ProductCard from "./ProductCard";

export default async function FeaturedProducts() {
  const products = await db.product.findMany({
    where: { status: "ACTIVE" },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <section id="featured-products" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">
            Featured Products
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Browse popular items from our catalog.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These featured products are pulled directly from your PostgreSQL database.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-20 text-center">
            <p className="text-lg font-semibold text-slate-900">
              No featured products are available yet.
            </p>
            <p className="mt-3 text-slate-600">
              Seed the database and refresh to see the latest catalog.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
