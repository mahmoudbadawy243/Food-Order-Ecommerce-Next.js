import { Environments } from '@/constants/enums';  // Environments contains 2 values "prod,dev", it is an enum for being easy to use
import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.

// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// db here is the varible that through it i will use my database
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === Environments.DEV
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== Environments.PROD) globalForPrisma.prisma = db;





