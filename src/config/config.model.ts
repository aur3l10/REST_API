import * as z from 'zod';

export const configSchema = z.object({
  database: z.object({
    DATABASE_URL: z.url({ error: 'DATABASE_URL must be a valid URL' }),
    DIRECT_URL: z.url({ error: 'DIRECT_URL must be a valid URL' }),
  }),
  app: z.object({
    PORT: z.coerce
      .number()
      .int({ error: 'PORT must be an integer' })
      .min(1)
      .max(65535)
      .default(3000),
    NODE_ENV: z
      .enum(['local', 'development', 'production', 'test'])
      .default('local'),
  }),
  log: z.object({
    LOG_LEVEL: z
      .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
      .default('info'),
  }),
});

export type Config = z.infer<typeof configSchema>;
