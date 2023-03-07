import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { QwikSpeakProvider } from 'qwik-speak';
import { config, translationFn } from './speak-config';
import globalStyles from './global.css';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    /**
     * Init Qwik Speak (only available in child components)
     */
    <QwikSpeakProvider config={config} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
        </head>
        <body>
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </QwikCityProvider>
    </QwikSpeakProvider>
  );
});
