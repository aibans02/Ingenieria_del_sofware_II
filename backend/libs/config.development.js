import logger from './logger.js';

module.exports = {
  database: 'empresa',
  username: 'root',
  password: 'pssword',
  params: {
    host: "localhost",
    dialect: 'mysql',
    dialectOptions: {
      encrypt: true,
      requestTimeout: 120000,
    },
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'P4lc0$$$.Rx',
  jwtSession: { session: false },
};
