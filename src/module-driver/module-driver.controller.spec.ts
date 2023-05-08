import { Test, TestingModule } from '@nestjs/testing';
import { ModuleDriverController } from './module-driver.controller';

describe('ModuleDriverController', () => {
  let controller: ModuleDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleDriverController],
    }).compile();

    controller = module.get<ModuleDriverController>(ModuleDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
