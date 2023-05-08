// @ts-ignore
import { Controller, Post, Body, TestingModule } from '@nestjs/testing';

@Controller('module-driver')
export class ModuleDriverController {
    @Post()
    async createModule(@Body() body: any) {
      const { moduleName } = body;

      const dynamicModule = await TestingModule.createDynamicTestingModule({
        module: class DynamicModule {},
        controllers: [], // Buraya dinamik modülde kullanılacak kontrolcülerin listesi eklenebilir
        providers: [], // Buraya dinamik modülde kullanılacak sağlayıcıların listesi eklenebilir
        imports: [], // Buraya dinamik modülde kullanılacak başka modüllerin listesi eklenebilir
      });

      return dynamicModule;
}
