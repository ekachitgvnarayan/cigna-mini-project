export default () => ({
  port: Number(process.env.PORT ?? 5002),  
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT ?? 1521) ,
    username: process.env.DB_USERNAME || 'system',
    password: process.env.DB_PASSWORD || 'yourPassword',
    sid: process.env.DB_SID || 'XEPDB1',
  },
  nodeEnv: process.env.NODE_ENV || 'development',
});
