import pino from 'pino';
import config from '../config/config';

export default pino({
  level: config.log.LOG_LEVEL,
  timestamp: pino.stdTimeFunctions.isoTime,
});
