import { Injectable } from '@nestjs/common';
import fs from 'fs';
import { products } from './product.interface';

@Injectable()
export class ProductsService {
  findAll(): products[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    const product = JSON.parse(data) as products[];
    return product;
  }
}
