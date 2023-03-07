import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import { config } from '../speak-config';
import { ChangeLocale } from '~/components/changeLocale';

export default component$(() => {
  return (
    <>
      <ChangeLocale/>
      <main>
        <Slot />
      </main>
    </>
  );
});

export const onRequest: RequestHandler = ({ params, locale }) => {
  const lang = params.lang;

  // Set Qwik locale
  locale(lang || config.defaultLocale.lang);
};
