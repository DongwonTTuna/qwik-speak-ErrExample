import { component$, useSignal, useTask$,$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { changeLocale, useSpeakConfig, useSpeakContext, useSpeakLocale } from 'qwik-speak';
import type { SpeakLocale } from 'qwik-speak';

export const ChangeLocale = component$(() => {
    const loc = useLocation();
    const nav = useNavigate();
  
    const ctx = useSpeakContext();
    const locale = useSpeakLocale();
    const config = useSpeakConfig();


    const currentLocale: { [key: string]: string } = {
      'ko': '한국어',
      'en': 'English',
      'jp': '日本語',
      'cn': '中文(簡体)',
      'ru': 'ру́сский',
    };
    const LangBox = useSignal(false);
  
  
  
    // Handle localized routing
    useTask$(async ({ track }) => {
      track(() => loc.params.lang);
  
      const newLocale = config.supportedLocales.find(value => value.lang === loc.params.lang) || config.defaultLocale;
      if (newLocale.lang !== locale.lang) {
        await changeLocale(newLocale, ctx);
      }
    });
  
    // Replace locale in URL
    const localizeUrl$ = $(async (newLocale: SpeakLocale) => {
      let pathname = loc.url.pathname;
      if (loc.params.lang) {
        if (newLocale.lang !== config.defaultLocale.lang) {
          pathname = pathname.replace(loc.params.lang, newLocale.lang);
        } else {
          pathname = pathname.replace(new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`), '/');
        }
      } else if (newLocale.lang !== config.defaultLocale.lang) {
        pathname = `/${newLocale.lang}${pathname}`;
      }
  
      // No full-page reload
      nav(pathname);
    });
  
    return (
        <div class='lang_box'>
        <p
          onClick$={() => {
            LangBox.value = !LangBox.value;
          }}
          class={LangBox.value === true ? 'select_box on' : 'select_box off'}
        >
          {currentLocale[locale.lang]}
        </p>
        <ul class={`select_lang${LangBox.value === true ? ' selected' : ''}`}>
          {config.supportedLocales.map((item) => {
            if (locale.lang === item.lang) return;
            return (
              <a
                onClick$={async () => {
                  LangBox.value = !LangBox.value;
                  localizeUrl$(item);
                }}
              >
                <p class='item'>{currentLocale[item.lang]}</p>
              </a>
            );
          })}
        </ul>
      </div>
    );
  });