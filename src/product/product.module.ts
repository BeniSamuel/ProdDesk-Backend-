import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entities";


@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [],
    controllers: []
})

export class ProductModule {};