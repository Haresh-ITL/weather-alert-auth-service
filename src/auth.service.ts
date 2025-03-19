// auth-service/src/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Dealer } from './dealer.model';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async register(userData) {
    const existingDealer = await Dealer.findOne({ where: { email: userData.email } });
  
    if (existingDealer) {
      throw new UnauthorizedException("Email already exists. Please use a different email.");
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return Dealer.create({ ...userData, password: hashedPassword });
  }

  async login(credentials) {
    const dealer = await Dealer.findOne({ where: { email: credentials.email } });
    if (!dealer || !(await bcrypt.compare(credentials.password, dealer.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = jwt.sign({ id: dealer.id }, 'SECRET_KEY', { expiresIn: '1h' });
    
    return {
      token,
      dealer: {
        id: dealer.id,
        name: dealer.name,
        email: dealer.email,
      },
    };
  }
}
