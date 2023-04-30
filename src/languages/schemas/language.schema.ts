import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LanguageDocument = HydratedDocument<Language>;

@Schema()
export class Language {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  alpha3: string;

  @Prop()
  status: number;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
