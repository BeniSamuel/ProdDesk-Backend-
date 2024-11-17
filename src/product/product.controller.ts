import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";


@Controller("products")
export class ProductController {
    constructor ( private readonly productService: ProductService) {};

    // Getting Products;
    @Get()
    async getProducts() {
        return await this.productService.findAllProduct();
    }

    // Getting a single Product
    @Get(":id")
    async getProduct( @Param('id') id: string) {
        const product = await this.productService.findProduct(Number(id));
        return product ? { message: "Product Found", product: product } : { message: "Product not found!!"}
    }

    // Creating Product
    @Post()
    async createProduct( @Body() productContent: ProductDto) {
        if ( productContent.name && productContent.description && productContent.price && productContent.quantity ) {
            const newProduct = await this.productService.createProduct(productContent);
            return { message: "Product Created!!👌👌", newProduct };
        }
        else {
            return { message: "Provide Complete inform"}
        }
    }

    // Deleting Product
    @Delete(":id")
    async deleteProduct ( @Param('id') id: string ) {
        await this.productService.deleteProduct(Number(id));
        return { message: "Product Deleted"};
    }

    // Updating Product
    // creating function for updating the product id and product new content
    @Put(":id")
    async updateProduct ( @Param('id') id: string, productContent: ProductDto ) {
        const newProduct = await this.productService.updateProduct( Number(id), productContent);
        return newProduct ? { message: "Product Updated 👌👌", product: newProduct } : { message: "No product found!"};
    }
}