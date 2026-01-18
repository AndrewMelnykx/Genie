// import { defineConfig } from "prisma/config";

// export default defineConfig({
//   schema: "./schema.prisma",
//   datasource: {
//     url: process.env.DATABASE_URL,
//     shadowDatabaseUrl: process.env.DIRECT_URL,
//   },
// });

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
    shadowDatabaseUrl: process.env.DIRECT_URL,
  },
});
