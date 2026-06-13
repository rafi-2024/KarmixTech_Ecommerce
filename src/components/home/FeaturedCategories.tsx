import { db } from "@/lib/db";
import CategoryCard from "./CategoryCard";

const categoryImageMap: { [key: string]: string } = {
  electronics: "/images/categories/electronics.png",
  fashion: "/images/categories/fashion.png",
  "home-living": "/images/categories/home.png",
  "beauty-skincare": "/images/categories/beauty.png",
  "sports-fitness": "/images/categories/sports.png",
  books: "/images/categories/books.png",
  "toys-games": "/images/categories/toys.png",
  automotive: "/images/categories/automotive.png",
};

export default async function FeaturedCategories() {
  const categories = await db.category.findMany({
    take: 4,
  });

  const enrichedCategories = categories.map((category) => ({
    name: category.name,
    slug: category.slug,
    image: categoryImageMap[category.slug] || "/images/categories/default.png",
    href: `/products?category=${category.slug}`,
  }));
  return (
    <section
      id="categories"
      className="bg-white py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Categories
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore our most popular collections.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {enrichedCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}