export type Language = "EN" | "FR";

interface Word<L extends Language> {
  language: L;
  value: string;
}

export type OtherLanguage<L extends Language> = Exclude<Language, L>;

export interface Translation<N extends Language> {
  id: string;
  native: Word<N>;
  foreign: Word<OtherLanguage<N>>;
}

export type IdGenerator = () => string;
