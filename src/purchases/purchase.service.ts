import { Injectable } from '@nestjs/common';
import fs from 'fs';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const data = fs.readFileSync('data/purchases.json', 'utf-8');
    const product = JSON.parse(data) as Purchase[];
    return product;
  }
}
