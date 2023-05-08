import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Claim } from './schemas/claim.schema';
import { Model } from 'mongoose';
import { CreateClaimDto } from './dto/create-claim-dto';

@Injectable()
export class ClaimsService {
    constructor(
        @InjectModel(Claim.name) private readonly claimModel: Model<Claim>,
    ) {}

    async addNewClaim(createClaimDto: CreateClaimDto): Promise<CreateClaimDto> {
        return await this.claimModel.create(createClaimDto);
    }

    async getAllClaim(): Promise<Claim[]> {
        return await this.claimModel.find().exec();
    }
}
