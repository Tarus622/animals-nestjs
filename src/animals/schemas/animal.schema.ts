import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop({ required: true })
  class: string;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  specie: string;

  @Prop({ required: true })
  age: number;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
