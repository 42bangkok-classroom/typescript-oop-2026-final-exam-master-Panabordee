import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './purchases.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { data } from './purchases.interface';

@Controller('data')
export class purchasesController {
  constructor(private readonly purchasesService: ProductsService) {}

  @Get()
  findAll(): ApiResponse<data[]> {
    return {
      success: true,
      data: this.purchasesService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
