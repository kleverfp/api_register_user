import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ferreira',
  password: 'Kfp_2008',
  database: 'nestjs',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};