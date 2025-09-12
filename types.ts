
export type Lang = 'en' | 'ta' | 'hi';

export interface Scheme {
  id: number;
  title: string;
  emoji: string;
  region: 'Central' | 'State' | string;
  desc: string;
  fund: string;
  tags: string[];
}

export interface Translations {
  [key: string]: string;
}

export interface I18nData {
  en: Translations;
  ta: Translations;
  hi: Translations;
}
