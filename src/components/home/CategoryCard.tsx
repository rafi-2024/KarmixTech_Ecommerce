import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  name,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-bold text-white">
          {name}
        </h3>

        <span className="mt-2 inline-block text-sm text-white/80">
          Shop Collection →
        </span>
      </div>
    </Link>
  );
}