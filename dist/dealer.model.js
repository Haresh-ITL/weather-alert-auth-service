"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Dealer = class Dealer extends sequelize_typescript_1.Model {
};
exports.Dealer = Dealer;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], Dealer.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Dealer.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ unique: true, allowNull: false }),
    __metadata("design:type", String)
], Dealer.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Dealer.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'created_at', allowNull: false }),
    __metadata("design:type", Date)
], Dealer.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'updated_at', allowNull: false }),
    __metadata("design:type", Date)
], Dealer.prototype, "updatedAt", void 0);
exports.Dealer = Dealer = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'dealers', timestamps: true })
], Dealer);
//# sourceMappingURL=dealer.model.js.map