import dotenv from 'dotenv';
import { Config, configSchema } from './config.model';

dotenv.config({ path: ['.env.local', '.env'] });

const config = {
  app: {
    PORT: process.env['PORT'],
    NODE_ENV: process.env['NODE_ENV'],
  },
  database: {
    DATABASE_URL: process.env['DATABASE_URL'],
    DIRECT_URL: process.env['DIRECT_URL'],
  },
  log: {
    LOG_LEVEL: process.env['LOG_LEVEL'],
  },
};

const validationConfig: Config = configSchema.parse(config);

export default Object.freeze(validationConfig);
