import Image from "next/image";
import Link from "next/link";
import type { Category, Product } from "@prisma/client";

interface ProductCardProps {
  product: Product & { category: Category };
}

const categoryImageMap: Record<string, string> = {
  electronics: "/images/categories/electronics.png",
  clothing: "/images/categories/fashion.png",
  home: "/images/categories/home.png",
  beauty: "/images/categories/beauty.png",
};

function getProductImage(categorySlug: string) {
  return categoryImageMap[categorySlug] ?? "/images/categories/home.png";
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={getProductImage(product.category.slug)}
          alt={product.category.name}
          fill
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
          {product.category.name}
        </p>

        <h3 className="mt-3 text-xl font-semibold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-lg font-semibold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <Link
            href="/products"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Shop
          </Link>
        </div>
      </div>
    </article>
  );
}
