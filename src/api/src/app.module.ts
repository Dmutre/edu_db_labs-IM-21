import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/PrismaModule';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
