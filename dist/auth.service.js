"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const dealer_model_1 = require("./dealer.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    async register(userData) {
        const existingDealer = await dealer_model_1.Dealer.findOne({ where: { email: userData.email } });
        if (existingDealer) {
            throw new common_1.UnauthorizedException("Email already exists. Please use a different email.");
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return dealer_model_1.Dealer.create({ ...userData, password: hashedPassword });
    }
    async login(credentials) {
        const dealer = await dealer_model_1.Dealer.findOne({ where: { email: credentials.email } });
        if (!dealer || !(await bcrypt.compare(credentials.password, dealer.password))) {
            throw new common_1.UnauthorizedException('Invalid email or password');
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map