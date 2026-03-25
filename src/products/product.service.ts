import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { data } from './product.interface';

@Injectable()
export class ProductsService {
  findAll(): data[] {
    const product = JSON.parse(
      readFileSync('/data/products.json', 'utf-8'),
    ) as data[];
    return product;
  }
}
