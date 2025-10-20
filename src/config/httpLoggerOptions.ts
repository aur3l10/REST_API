import config from './config';

const commonOptions = {};

const devOptions = {
  transport: {
    options: { colorize: true },
    target: 'pino-pretty',
  },
};

const prodOptions = {};

export const httpLoggerOptions =
  config.app.NODE_ENV !== 'production'
    ? { ...commonOptions, ...devOptions }
    : { ...commonOptions, ...prodOptions };
