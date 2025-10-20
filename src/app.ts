import express from 'express';
import httpLogger from 'pino-http';
import { httpLoggerOptions } from './config/httpLoggerOptions';
import routes from './routes';

const app = express();

app.use(httpLogger({ ...httpLoggerOptions }));

app.use(express.json());

// Routes
app.use(routes);

export default app;
