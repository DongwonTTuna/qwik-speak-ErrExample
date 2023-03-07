import { $ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import type { LoadTranslationFn, SpeakConfig, TranslationFn } from 'qwik-speak';

export const config: SpeakConfig = {
  defaultLocale: { lang: 'ko', currency: 'KRW', timeZone: 'Asia/Seoul' },
  supportedLocales: [
    { lang: 'ko', currency: 'KRW', timeZone: 'Asia/Seoul' },
    { lang: 'en', currency: 'USD', timeZone: 'America/Los_Angeles' },
    { lang: 'jp', currency: 'JPY', timeZone: 'Asia/Tokyo' },
    { lang: 'cn', currency: 'CNY', timeZone: 'Asia/Shanghai' },
    { lang: 'ru', currency: 'RUB', timeZone: 'Europe/Moscow' },
  ],
  assets: ['common'],
};

export const loadTranslation$: LoadTranslationFn = $(
  async (lang: string, asset: string, origin?: string) => {
    let url = '';
    // Absolute urls on server
    if (isServer && origin) {
      url = origin;
    }
    url += `/i18n/${lang}/${asset}.json`;
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      console.warn(`loadTranslation$: ${url} not found`);
    }
  }
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
