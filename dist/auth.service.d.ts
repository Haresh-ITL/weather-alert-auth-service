import { Dealer } from './dealer.model';
export declare class AuthService {
    register(userData: any): Promise<Dealer>;
    login(credentials: any): Promise<{
        token: any;
        dealer: {
            id: string;
            name: string;
            email: string;
        };
    }>;
}
