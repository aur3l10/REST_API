import dotenv from 'dotenv';

dotenv.config({ path: ['.env.local', '.env'] });

interface Config {
  port: number;
  nodeEnv: string;
  dbUrl: string | undefined;
  directUrl: string | undefined;
}

const config: Config = {
  port: Number(process.env?.['PORT']) || 3000,
  nodeEnv: process.env?.['NODE_ENV'] || 'development',
  dbUrl: process.env?.['DATABASE_URL'],
  directUrl: process.env?.['DIRECT_URL'],
};

export default config;
