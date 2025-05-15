import { Prisma } from "@prisma/client";

//  custom type to use it as type safty in TS to return features of product and sizes and extras from prisma schema 
export type ProductWithItsRelations = Prisma.ProductGetPayload<{
  include: {
    sizes: true;
    extras: true;
  }
}>