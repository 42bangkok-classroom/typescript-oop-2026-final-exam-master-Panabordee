import { Module } from '@nestjs/common';
import { ProductsService } from './purchases.service';
import { purchasesController } from './purchases.controller';

@Module({
  controllers: [purchasesController],
  providers: [ProductsService],
})
export class ProductsModule {}
