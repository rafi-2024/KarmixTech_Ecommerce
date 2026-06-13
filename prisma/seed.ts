import { PrismaClient, ProductStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
      description: "Electronic devices and accessories",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "clothing",
      description: "Fashion and apparel",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        price: 99.99,
        stock: 50,
        status: ProductStatus.ACTIVE,
        categoryId: electronics.id,
      },
      {
        name: "Gaming Mouse",
        slug: "gaming-mouse",
        price: 49.99,
        stock: 100,
        status: ProductStatus.ACTIVE,
        categoryId: electronics.id,
      },
      {
        name: "Cotton T-Shirt",
        slug: "cotton-tshirt",
        price: 19.99,
        stock: 200,
        status: ProductStatus.ACTIVE,
        categoryId: clothing.id,
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());