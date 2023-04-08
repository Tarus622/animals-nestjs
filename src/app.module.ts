import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AnimalsModule, MongooseModule.forRoot('mongodb+srv://davideoliveira622:pantera@cluster1.kyyyn6b.mongodb.net/Animals')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}