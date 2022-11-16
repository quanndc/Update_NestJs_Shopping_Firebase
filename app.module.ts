import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { ProductionsService } from './productions/productions.service';
import { ProductionsController } from './productions/productions.controller';
import { ProductionsModule } from './productions/productions.module';


@Module({
  imports: [CartModule, ProductionsModule],
  controllers: [AppController, ProductionsController,],
  providers: [AppService, ProductionsService],
})
export class AppModule {}
