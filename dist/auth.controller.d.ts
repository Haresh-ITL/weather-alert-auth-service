import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(userData: {
        name: string;
        email: string;
        password: string;
    }): Promise<import("./dealer.model").Dealer>;
    login(credentials: any): Promise<{
        token: any;
        dealer: {
            id: string;
            name: string;
            email: string;
        };
    }>;
}
