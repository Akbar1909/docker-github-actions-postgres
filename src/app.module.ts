import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookMarkModule } from './bookmmark/bookmark.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BookMarkModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
