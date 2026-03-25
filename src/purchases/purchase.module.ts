import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchasesController } from './purchase.controller';

@Module({
  controllers: [PurchasesController],
  providers: [PurchaseService],
})
export class PurchasesModule {}
