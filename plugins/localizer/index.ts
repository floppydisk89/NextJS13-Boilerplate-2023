import { useRouter } from 'next/router';
import enUS from '../../locales/en-us/locale.json';
import nlNL from '../../locales/nl-nl/locale.json';
import ptPT from '../../locales/pt-pt/locale.json';

type JSONValue = {
  [x: string]: string;
};

export function useLocale() {
  return (copyId: string) => {
    const router = useRouter();
    const { locale } = router;

    let selectedLocaleContent: JSONValue = {};
    switch (locale) {
      case 'en-us':
        selectedLocaleContent = enUS;
        break;
      case 'nl-nl':
        selectedLocaleContent = nlNL;
        break;
      case 'pt-pt':
        selectedLocaleContent = ptPT;
        break;

      default:
        break;
    }

    return selectedLocaleContent[copyId];
  };
}
