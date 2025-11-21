import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { CategoriesModule } from './categories/categories.module';
import { AuditsModule } from './audits/audits.module';

@Module({
  imports: [PaymentsModule, CategoriesModule, AuditsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
