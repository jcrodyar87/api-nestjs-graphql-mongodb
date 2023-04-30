import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel(Language.name) private languageModel: Model<Language>,
  ) {}

  async create(createLanguageInput: CreateLanguageInput): Promise<Language> {
    const createdLanguage = new this.languageModel(createLanguageInput);
    return createdLanguage.save();
  }

  async findAll(): Promise<Language[]> {
    return this.languageModel.find({ status: { $gte: 0, $lte: 1 } }).exec();
  }

  async findOne(id: number): Promise<Language> {
    return this.languageModel.findOne({ id: id });
  }

  async update(
    id: number,
    updateLanguageInput: UpdateLanguageInput,
  ): Promise<Language> {
    return this.languageModel.findOneAndUpdate(
      { id: id },
      updateLanguageInput,
      { new: true },
    );
  }

  async remove(id: number): Promise<string> {
    this.languageModel.findOne({ id: id }).updateOne({ status: 3 });
    return 'Deleted';
  }
}
