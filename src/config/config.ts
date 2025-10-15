import dotenv from 'dotenv';
import { Config, configSchema } from './config.model';

dotenv.config({ path: ['.env.local', '.env'] });

const config: Config = configSchema.parse(process.env);

export default config;
