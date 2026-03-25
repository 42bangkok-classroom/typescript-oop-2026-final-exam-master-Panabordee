import { Module } from '@nestjs/common';
import { PurchasesService } from './purchase.service';
import { PurchasesController } from './purchase.controller.';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
