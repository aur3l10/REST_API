import express from 'express';
import httpLogger from 'pino-http';
import routes from './routes';

const app = express();

app.use(
  httpLogger({
    transport: { options: { colorize: true }, target: 'pino-pretty' },
  })
);
app.use(express.json());

// Routes
app.use(routes);

export default app;
