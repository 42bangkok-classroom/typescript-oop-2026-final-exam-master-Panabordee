import { Controller, Get } from '@nestjs/common';
import { PurchasesService } from './purchase.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Purchase } from './purchase.interface';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly productService: PurchasesService) {}

  @Get()
  findAll(): ApiResponse<Purchase[]> {
    return {
      success: true,
      data: this.productService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
