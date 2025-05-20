//  this folder 'server' then 'db' only to handle the stracture as 'server' folder refere to all jops in server and 'db' is for database in server 

import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

// ----------------------------------------------------------------------------
export const getBestSellers = cache( () => { 
  const bestSellers = db.product.findMany({
    where: {
      order: {
        gt: 0  // Only get products with order > 0
      }
    },
    orderBy: {
  order: 'desc'
},
    take: 3, // limit the number of displaying products to 3
    include: {
      sizes: true,
      extras: true,
    }, 
  });
  return bestSellers;
},
  ["best-sellers"],
  {revalidate:3600}
) 
// --------------------------------------------------------------------------

export const getProductsByCategory = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ["products-by-category"],
  { revalidate: 3600 }
);