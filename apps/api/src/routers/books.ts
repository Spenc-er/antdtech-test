import { z } from 'zod';
import { publicProcedure, router } from '../server/trpc.js';
import BookModule from '../../../../packages/db/models/book.js';
const Book = BookModule.default;


export const booksRouter = router({
  list: publicProcedure
    .input(z.object({
      page: z.number().min(1).default(1),
      limit: z.number().min(1).max(100).default(10),
    }))
    .query(async ({ input }) => {
      const skip = (input.page - 1) * input.limit;
      const [books, total] = await Promise.all([
        Book.find().skip(skip).limit(input.limit),
        Book.countDocuments()
      ]);

      return {
        books,
        total,
        page: input.page,
        pageCount: Math.ceil(total / input.limit),
      };
    }),
});
