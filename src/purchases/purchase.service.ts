import { Injectable } from '@nestjs/common';
import fs from 'fs';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchasesService {
  findAll(): Purchase[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    const product = JSON.parse(data) as Purchase[];
    return product;
  }
}
