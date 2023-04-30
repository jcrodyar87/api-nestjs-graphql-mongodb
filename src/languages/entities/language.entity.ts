import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Language {
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
