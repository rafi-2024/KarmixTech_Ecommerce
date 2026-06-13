import Link from "next/link";

interface ProductsFilterProps {
  categories: { name: string; slug: string }[];
  selectedCategory?: string;
}

export default function ProductsFilter({ categories, selectedCategory }: ProductsFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        Category:
      </span>
      <Link
        href="/products"
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          !selectedCategory
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
        }`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/products?category=${category.slug}`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selectedCategory === category.slug
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
