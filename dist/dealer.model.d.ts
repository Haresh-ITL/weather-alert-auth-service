import { Model } from 'sequelize-typescript';
export declare class Dealer extends Model {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
