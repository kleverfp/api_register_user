"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ferreira',
    password: 'Kfp_2008',
    database: 'nestjs',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map