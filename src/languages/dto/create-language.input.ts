import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLanguageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
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
