import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { Claim } from './schemas/claim.schema';
import { CreateClaimDto } from './dto/create-claim-dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/security/jwt-auth.guard';

@ApiTags('claims')
@Controller('claims')
export class ClaimsController {
    constructor(private readonly claimService: ClaimsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Claim[]> {
        return this.claimService.getAllClaim();
    }

    @UseGuards(JwtAuthGuard)
    @Post('addClaim')
    async createClaim(
        @Body() createClaimDto: CreateClaimDto,
    ): Promise<CreateClaimDto> {
        return this.claimService.addNewClaim(createClaimDto);
    }
}
