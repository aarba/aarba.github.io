import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const debug = process.env.NODE_ENV === 'development';
console.log('debug', debug);

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          titles: {
            welcome: 'Welcome to Avalon Dental'
          },
          navLink: {
            home: 'Գլխավոր',
            gallery: 'Տեսադարան',
            products: 'Մոդելներ',
            contact: 'Մեր մասին'
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          products: {
            title: 'Մոդելներ',
            desc: 'Տրիցիկլների բոլոր մոդելների համար aarba ընկերությունը տրամադրում է մեկ տարվա երաշխիք։',
            premium1500: '1500PR',
            advanced1200: '1200AD',
            standard1000: '1000ST',
            premium1500pr: 'Գինը 1.259.000 ՀՀ դրամ',
            advanced1200pr: 'Գինը 1.159.000 ՀՀ դրամ',
            standard1000pr: 'Գինը 890.000 ՀՀ դրամ',
          }
          
        }
      },
      ru: {
        translation: {
          titles: {
            welcome: 'ДОБРО ПОЖАЛОВАТЬ В АВАЛОН ДЕНТАЛ'

          },
          navLink: {
            home: 'О нас',
            gallery: 'Галирея',
            services: 'Услуги',
            contact: 'Обратная связь'
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          services: {
            title: 'Наши услуги',
            desc: 'Мы используем инновационные методы, технику, препараты, У нас работают специалисты получившие квалификацию за границей, происходит обслуживание страховых и социальных пакетов( или полюсов). Мы обеспечиваем индивидуальный подход к каждому пациенту.',
            implantation: 'Имплантация',
            surgery: 'Хирургия',
            cosmetic: 'Косметическая реставрация зубов',
            orthopedics: 'Ортопедия',
            therapy: 'Терапия',
            pediatric: 'Детская стоматология',
            orthodontics: 'Ортодонтия'
          }
        }
      },
      arm: {
        translation: {
          titles: {
            welcome: 'Բարի գալուստ Ավալոն Դենտալ'

          },
          navLink: {
            home: 'Գլխավոր',
            products: 'Մոդելներ',
            contact: 'Մեր մասին'
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          services: {
            title: 'Մոդելներ',
            desc: 'Տրիցիկլների բոլոր մոդելների համար aarba ընկերությունը տրամադրում է մեկ տարվա երաշխիք։',
            premium1500: '1500PR',
            advanced1200: '1200AD',
            standard1000: '1000ST',
            premium1500pr: 'Գինը 1.259.000 ՀՀ դրամ',
            advanced1200pr: 'Գինը 1.159.000 ՀՀ դրամ',
            standard1000pr: 'Գինը 890.000 ՀՀ դրամ',
          }
        }
      }
    }
  });

  window.i18n = i18n

export default i18n;