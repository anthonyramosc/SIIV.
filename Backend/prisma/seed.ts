import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear algunos productos de ejemplo
  const products = [
    {
      name: 'Product 1',
      version: '1.0',
      price: 19.99,
      description: 'Description for Product 1',
    },
    {
      name: 'Product 2',
      version: '1.1',
      price: 29.99,
      description: 'Description for Product 2',
    },
    {
      name: 'Product 3',
      version: '2.0',
      price: 39.99,
      description: 'Description for Product 3',
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name }, // Upsert by unique field
      update: {}, // No update needed if exists
      create: product,
    });
  }

  console.log('Seeding completed!');
}

// Manejo de errores y cierre de la conexión
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });