import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Payment } from '../database/entities/payment.entity';
import { Category } from '../database/entities/category.entity';
import { Audit } from '../database/entities/audit.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT ?? 1521),
  username: process.env.DB_USERNAME || 'system',
  password: process.env.DB_PASSWORD || 'yourPassword',
  sid: process.env.DB_SID || 'XEPDB1',
  synchronize: process.env.NODE_ENV !== 'production', // Auto-create tables in dev
  logging: process.env.NODE_ENV === 'development',
  entities: [Payment, Category, Audit],
};
