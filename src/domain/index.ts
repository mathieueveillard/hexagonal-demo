import { Dependencies } from "./dependencies";
import { Language, OtherLanguage, Translation } from "./types";

export type ProtoTranslation<N extends Language> = Omit<Translation<N>, "id">;

const addTranslation =
  <N extends Language>({ createId, storage }: Dependencies<N>) =>
  async (protoTranslation: ProtoTranslation<N>): Promise<void> => {
    const translation: Translation<N> = {
      ...protoTranslation,
      id: createId(),
    };
    await storage.saveTranslation(translation);
  };

const getAllTranslationsForForeignLanguage =
  <N extends Language>({ storage }: Dependencies<N>) =>
  async (language: OtherLanguage<N>): Promise<Translation<N>[]> => {
    return storage.getAllTranslationsForForeignLanguage(language);
  };

const translationApi = {
  addTranslation,
  getAllTranslationsForForeignLanguage,
};

export default translationApi;
