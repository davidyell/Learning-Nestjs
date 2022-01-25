import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  private generateId(): string {
    return Math.floor(Math.random() * 100).toString();
  }

  insertProduct(title: string, description: string, price: number) {
    const newProduct = new Product(
      this.generateId(),
      title,
      description,
      price,
    );
    this.products.push(newProduct);

    return newProduct.id;
  }

  /** Generate a copy of the products, to prevent returning a pointer to the property */
  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProductById(productId);

    return { ...product };
  }

  updateProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const product = this.findProductById(productId);

    const index = this.products.findIndex((prod) => (prod.id = productId));
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  removeProduct(productId: string) {
    const product = this.findProductById(productId);
    const index = this.products.findIndex((prod) => prod.id === productId);

    this.products.splice(index, 1);
  }

  private findProductById(id: string): Product {
    const product = this.products.find((prod) => prod.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}
