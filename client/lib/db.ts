// import { PrismaClient } from "@/lib/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// declare const globalThis: {
//   prismaGlobal?: PrismaClient;
// };

// const prismadb = globalThis.prismaGlobal ?? new PrismaClient({ adapter });
// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prismadb;

// export default prismadb;

import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 1,
});

attachDatabasePool(pool);

const prismadb = new PrismaClient({
  adapter: new PrismaPg(pool),
});

export default prismadb;
