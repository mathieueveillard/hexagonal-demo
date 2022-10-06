import { Language, OtherLanguage, Translation, IdGenerator } from "./types";

export type TranslationStorage<N extends Language> = {
  getAllTranslationsForForeignLanguage(
    language: OtherLanguage<N>
  ): Promise<Translation<N>[]>;
  saveTranslation(translation: Translation<N>): Promise<void>;
};

export type Dependencies<N extends Language> = {
  createId: IdGenerator;
  storage: TranslationStorage<N>;
};
