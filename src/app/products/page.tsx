import { db } from "@/lib/db";
import ProductCard from "@/components/products/ProductCard";
import ProductsFilter from "@/components/products/ProductsFilter";

export const dynamic = "force-dynamic";

const categoryOptions = [
  { name: "Electronics", slug: "electronics" },
  { name: "Clothing", slug: "clothing" },
  { name: "Home & Living", slug: "home" },
  { name: "Beauty", slug: "beauty" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = await searchParams;
  const filterCategory = Array.isArray(resolvedSearchParams.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams.category;

  const products = await db.product.findMany({
    where: {
      status: "ACTIVE",
      category: filterCategory ? { slug: filterCategory } : undefined,
    },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1 ">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Product catalog
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Browse our products
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore active products from the database, filtered by category where requested.
          </p>
        </div>

        <ProductsFilter 
          className="flex-2 sm:w-auto"
          categories={categoryOptions}
          selectedCategory={filterCategory}
        />
      </div>

      {products.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-20 text-center">
          <p className="text-lg font-semibold text-slate-900">
            No products found.
          </p>
          <p className="mt-3 text-slate-600">
            Try a different category or check back after the database is seeded.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
