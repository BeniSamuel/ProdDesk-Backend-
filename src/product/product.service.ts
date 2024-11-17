import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entities";


@Injectable()
export class ProductService {
    constructor ( @InjectRepository(Product) private readonly productRepository: Repository<Product> ) {};

    findAllProduct(): Promise<Product[]> {
        return this.productRepository.find();
    }
}