import { Language, OtherLanguage, Translation, IdGenerator } from "./types";

export interface TranslationStorage<N extends Language> {
  getAllTranslationsForForeignLanguage(
    language: OtherLanguage<N>
  ): Promise<Translation<N>[]>;
  saveTranslation(translation: Translation<N>): Promise<void>;
}

export interface Dependencies<N extends Language> {
  createId: IdGenerator;
  storage: TranslationStorage<N>;
}
