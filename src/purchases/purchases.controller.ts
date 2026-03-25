import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './purchases.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { data } from './purchases.interface';

@Controller('data')
export class PurchasesController {
  constructor(private readonly PurchasesService: ProductsService) {}

  @Get()
  findAll(): ApiResponse<data[]> {
    return {
      success: true,
      data: this.PurchasesService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
