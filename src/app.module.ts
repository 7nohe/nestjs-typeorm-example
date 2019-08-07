import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nest-app-db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true,
      keepConnectionAlive: true,
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
