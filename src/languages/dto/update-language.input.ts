import { CreateLanguageInput } from './create-language.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLanguageInput extends PartialType(CreateLanguageInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  alpha3: string;

  @Field()
  status: number;
}
