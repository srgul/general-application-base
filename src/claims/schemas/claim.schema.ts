import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Claim {
    @Prop()
    id: string;
    @Prop()
    name: string;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);
