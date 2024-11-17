import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entities";
import { ProductDto } from "./dto/product.dto";


@Injectable()
export class ProductService {
    constructor ( @InjectRepository(Product) private readonly productRepository: Repository<Product> ) {};

    findAllProduct(): Promise<Product[]> {
        return this.productRepository.find();
    }

    findProduct(id: number): Promise<Product> {
        return this.productRepository.findOneBy({id});
    }

    createProduct(productData: ProductDto): Promise<Product> {
        const newProduct = this.productRepository.create(productData);
        return this.productRepository.save(newProduct);
    }

    updateProduct( id: number, productData: ProductDto ): Promise<Product> {
        this.productRepository.update(id, productData);
        return this.productRepository.findOneBy({id});
    }

    deleteProduct( id: number) {
        this.productRepository.delete(id);
    }

}