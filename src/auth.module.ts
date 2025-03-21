import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Dealer } from './dealer.model';

@Module({
  imports: [SequelizeModule.forFeature([Dealer])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
