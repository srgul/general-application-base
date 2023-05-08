import { Module } from '@nestjs/common';
import { ModuleDriverService } from './module-driver.service';
import { ModuleDriverController } from './module-driver.controller';

@Module({
  providers: [ModuleDriverService],
  controllers: [ModuleDriverController]
})
export class ModuleDriverModule {}
