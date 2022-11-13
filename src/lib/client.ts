/**
 * Create an instance of generated Prisma client for eve-warehouse
 *
 * ### Example (es module)
 * ```js
 * import { createClient } from 'eve-db'
 * const client = createClient("postgres://postgres:<password>@<db_host>/eve_warehouse?schema=evesde");
 * ```
 */

import { PrismaClient } from '../generated/client';

export const createClient = (url: string) => {
  return new PrismaClient({
    datasources: {
      db: {
        url,
      }
    }
  });
}