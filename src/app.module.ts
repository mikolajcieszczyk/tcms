import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';
import { BookingsModule } from './bookings/bookings.module';
import { CourtsModule } from './courts/courts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ClientsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    BookingsModule,
    CourtsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
