import { useRouter } from 'next/router';
import enUs from '../../locales/en-us';
import nlNl from '../../locales/nl-nl';
import ptPt from '../../locales/pt-pt';

export function useLocale() {
  const router = useRouter();
  const { locale } = router;

  let selectedLocaleContent: object = {};
  switch (locale) {
    case 'en-us':
      selectedLocaleContent = enUs;
      break;
    case 'nl-nl':
      selectedLocaleContent = nlNl;
      break;
    case 'pt-pt':
      selectedLocaleContent = ptPt;
      break;

    default:
      break;
  }

  return selectedLocaleContent;
}
