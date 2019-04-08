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
  jwtSecret: 'InG3ri4$ofW4R3',
  jwtSession: { session: false },
};
