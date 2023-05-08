import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    email: string;
    @Prop()
    username: string;
    @Prop()
    password: string;
    @Prop()
    claim: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
