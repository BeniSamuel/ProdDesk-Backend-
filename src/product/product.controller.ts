import { Controller, Get, Param } from "@nestjs/common";
import { ProductService } from "./product.service";


@Controller("products")
export class ProductController {
    constructor ( private readonly productService: ProductService) {};

    // Getting Products;
    @Get()
    async getProducts() {
        return await this.productService.findAllProduct();
    }

    // Getting a single Product
    @Get("id")
    async getProduct( @Param('id') id: string) {
        const product = await this.productService.findAllProduct()
    }
}