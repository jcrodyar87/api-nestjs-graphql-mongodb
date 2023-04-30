import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Language, LanguageSchema } from './schemas/language.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Language.name, schema: LanguageSchema },
    ]),
  ],
  providers: [LanguagesResolver, LanguagesService],
})
export class LanguagesModule {}
