import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative">
      {/* Rating Card */}
      <div className="absolute -left-6 top-10 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl">
        <div className="text-sm text-slate-500">
          Customer Rating
        </div>

        <div className="font-bold text-slate-900">
          ⭐ 4.9 / 5
        </div>
      </div>

      {/* Shipping Card */}
      <div className="absolute -right-6 top-28 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl">
        <div className="text-sm text-slate-500">
          Shipping
        </div>

        <div className="font-bold text-slate-900">
          🚚 Fast Delivery
        </div>
      </div>

      {/* Product Count */}
      <div className="absolute bottom-10 -left-8 z-20 rounded-2xl bg-white px-5 py-4 shadow-xl">
        <div className="text-sm text-slate-500">
          Products
        </div>

        <div className="font-bold text-slate-900">
          🛍️ 10,000+
        </div>
      </div>

      {/* Category Collage */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/categories/electronics.png"
            alt="Electronics"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/categories/fashion.png"
            alt="Fashion"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/categories/home.png"
            alt="Home and Living"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/categories/beauty.png"
            alt="Beauty"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}