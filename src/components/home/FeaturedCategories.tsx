import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Electronics",
    image: "/images/categories/electronics.jpg",
    href: "/products?category=electronics",
  },
  {
    name: "Clothing",
    image: "/images/categories/clothing.jpg",
    href: "/products?category=clothing",
  },
  {
    name: "Home & Living",
    image: "/images/categories/home.jpg",
    href: "/products?category=home",
  },
  {
    name: "Beauty",
    image: "/images/categories/beauty.jpg",
    href: "/products?category=beauty",
  },
];

export default function FeaturedCategories() {
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
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}