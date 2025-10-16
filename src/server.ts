import app from './app';
import config from './config/config';
import logger from './shared/logger';

const server = app.listen(config.app.PORT, () => {
  logger.info(`Server running on port ${config.app.PORT}`);
});

process.on('SIGTERM', () => {
  logger.fatal('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});

process.on('SIGINT', () => {
  logger.fatal('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});
