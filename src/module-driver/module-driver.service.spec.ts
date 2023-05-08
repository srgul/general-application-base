import { Test, TestingModule } from '@nestjs/testing';
import { ModuleDriverService } from './module-driver.service';

describe('ModuleDriverService', () => {
  let service: ModuleDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleDriverService],
    }).compile();

    service = module.get<ModuleDriverService>(ModuleDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
