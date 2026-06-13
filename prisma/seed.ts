import fs from "fs/promises";
import path from "path";
import { PrismaClient, Decimal } from "@prisma/client";

const prisma = new PrismaClient();


interface SeedCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

interface SeedProduct {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  status: string;
  imageUrl?: string;
  categoryId: string;
}

async function main() {
  const seedPath = path.resolve(__dirname, "../public/ecommerce-seed-data.json");
  const rawJson = await fs.readFile(seedPath, "utf-8");
  const seedData = JSON.parse(rawJson) as {
    [key: string]: SeedCategory[] | SeedProduct[];
  };

  const categories = seedData["/seed/categories.json"] as SeedCategory[];
  const products = seedData["/seed/products.json"] as SeedProduct[];

  if (!categories || !products) {
    throw new Error(
      `Seed file did not contain expected "/seed/categories.json" or "/seed/products.json" arrays.`
    );
  }

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
      },
      create: {
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
      },
    });
  }

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        description: product.description,
        price: new Decimal(product.price.toString()),
        stock: product.stock,
        status: product.status as "DRAFT" | "ACTIVE" | "ARCHIVED",
        imageUrl: product.imageUrl,
        categoryId: product.categoryId,
      },
      create: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: new Decimal(product.price.toString()),
        stock: product.stock,
        status: product.status as "DRAFT" | "ACTIVE" | "ARCHIVED",
        imageUrl: product.imageUrl,
        categoryId: product.categoryId,
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });