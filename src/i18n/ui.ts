// Locale dictionaries for shared UI chrome (navigation, footer, forms,
// components). Page prose lives in the per-locale page files themselves.

export const LOCALES = ['en', 'ru', 'bg', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Full language names — used for aria-labels and the title attribute. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  bg: 'Български',
  de: 'Deutsch',
};

/** Short codes shown in the header. Full names do not fit next to the nav. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  bg: 'BG',
  de: 'DE',
};

/** BCP-47 tags used for `lang`, `hreflang` and `inLanguage`. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  bg: 'bg',
  de: 'de',
};

/**
 * Routes that exist in every locale, written without a locale prefix and
 * without slashes. Only these pages get hreflang alternates and a direct
 * language switch; everywhere else the switcher falls back to the locale
 * home page so it can never point at a 404.
 */
export const LOCALIZED_ROUTES = ['', 'where-to-stay', 'transfers', 'faq'] as const;

/**
 * Languages offered through the GTranslate widget: machine translation only,
 * for visitors whose language we do not write ourselves. The four hand-written
 * locales are deliberately absent — machine output on the same URL would
 * compete with the real copy. The page's own language is prepended at runtime
 * so GTranslate knows what it is translating from.
 */
export const MACHINE_ONLY_LANGUAGES = ['tr', 'fr', 'it', 'es', 'pl', 'cs', 'nl'] as const;

export const ui = {
  en: {
    'nav.packages': 'Packages',
    'nav.packages': 'Pakete',
    'nav.news': 'News',
    'nav.stay': 'Stay & Zones',
    'nav.transport': 'Transport',
    'nav.events': 'Events',
    'nav.experience': 'Experience',
    'nav.faq': 'FAQ',
    'nav.apps': 'Survival Apps',
    'nav.open': 'Open navigation menu',
    'nav.close': 'Close navigation menu',
    'lang.label': 'Language',
    'footer.team': 'The Local Insider Team',
    'footer.about':
      'Burgas 2027 Guide is an independent event and travel portal. We are locals in love with Burgas and the coast. We cut through the noise to bring international fans, travelers, and delegations verified lodging picks, stress-free transit playbooks, and genuine coastal recommendations.',
    'footer.disclaimer':
      'Disclaimer: burgas2027guide.com is an independent fan travel portal and is not affiliated with, endorsed by, or connected to the European Broadcasting Union (EBU), Bulgarian National Television (BNT), or the official Eurovision Song Contest.',
    'footer.community': 'Community & Legal',
    'footer.telegram': 'Join RU Telegram',
    'footer.contact': 'Contact & About Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.partner': 'Partner',
    'footer.investors': 'For Property Owners (B2B)',
    'footer.disclosure': 'Affiliate Disclosure',
    'hero.waitlist': 'Join the Secret Waitlist',
    'hero.waitlistText':
      'Get notified instantly on ticket sales & access our secret accommodation list before the crowds.',
    'hero.emailPlaceholder': 'Enter your email address',
    'hero.cta': 'Get Early Access',
    'hero.privacy': 'We respect your privacy. No spam.',
    'hero.telegramPitch': '🇷🇺 🇧🇬 Русскоязычный? Узнай о билетах первым!',
    'hero.telegramCta': 'Присоединиться к Telegram',
    'card.vibe': 'Vibe & Attractions:',
    'card.logistics': 'Logistics:',
    'card.insider': 'Insider Tip:',
    'card.book': 'Check Availability',
    'map.title': '📍 The Burgas 2027 Coastal Map',
    'map.hint': 'Click a station to explore accommodation options in that area.',
    'map.north': 'North Coast (Area 2)',
    'map.city': 'Burgas City (Area 1)',
    'map.south': 'South Coast (Area 3)',
    'map.budget': 'Budget/Party',
    'map.luxury': 'Luxury',
    'map.heritage': 'Heritage',
    'map.relaxed': 'Relaxed',
    'map.airport': 'Airport',
    'map.arena': 'Arena',
    'map.seagarden': 'Sea Garden',
    'map.eurovillage': 'EuroVillage',
    'map.beach': 'Beach',
    'map.quiet': 'Quiet',
    'map.riviera': 'Riviera',
    'map.min': 'min',
  },
  ru: {
    'nav.packages': 'Пакеты',
    'nav.news': 'Новости',
    'nav.stay': 'Где жить',
    'nav.transport': 'Транспорт',
    'nav.events': 'События',
    'nav.experience': 'Побережье',
    'nav.faq': 'Вопросы',
    'nav.apps': 'Приложения',
    'nav.open': 'Открыть меню',
    'nav.close': 'Закрыть меню',
    'lang.label': 'Язык',
    'footer.team': 'Команда местных',
    'footer.about':
      'Burgas 2027 Guide — независимый портал о событии и путешествии. Мы живём в Бургасе и любим это побережье. Мы отсеиваем шум и даём фанатам, туристам и делегациям проверенные варианты жилья, понятные схемы транспорта и честные рекомендации по побережью.',
    'footer.disclaimer':
      'Дисклеймер: burgas2027guide.com — независимый фанатский портал о путешествиях. Мы не связаны с Европейским вещательным союзом (EBU), Болгарским национальным телевидением (BNT) и официальным конкурсом «Евровидение», не одобрены и не аффилированы с ними.',
    'footer.community': 'Сообщество и правовое',
    'footer.telegram': 'Telegram на русском',
    'footer.contact': 'Контакты и о нас',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.partner': 'Партнёрам',
    'footer.investors': 'Владельцам жилья (B2B)',
    'footer.disclosure': 'Партнёрские ссылки',
    'hero.waitlist': 'Закрытый список ожидания',
    'hero.waitlistText':
      'Сообщим о старте продаж билетов первыми и откроем доступ к нашему непубличному списку жилья до того, как набежит толпа.',
    'hero.emailPlaceholder': 'Ваш email',
    'hero.cta': 'Получить ранний доступ',
    'hero.privacy': 'Уважаем вашу приватность. Без спама.',
    'hero.telegramPitch': '🇷🇺 Наш Telegram-канал: билеты, жильё, транспорт',
    'hero.telegramCta': 'Присоединиться к Telegram',
    'card.vibe': 'Атмосфера и что рядом:',
    'card.logistics': 'Логистика:',
    'card.insider': 'Совет местных:',
    'card.book': 'Смотреть доступность',
    'map.title': '📍 Карта побережья Бургаса 2027',
    'map.hint': 'Нажмите на точку, чтобы посмотреть варианты жилья в этом районе.',
    'map.north': 'Северное побережье (зона 2)',
    'map.city': 'Город Бургас (зона 1)',
    'map.south': 'Южное побережье (зона 3)',
    'map.budget': 'Бюджет/тусовки',
    'map.luxury': 'Премиум',
    'map.heritage': 'Наследие',
    'map.relaxed': 'Спокойно',
    'map.airport': 'Аэропорт',
    'map.arena': 'Арена',
    'map.seagarden': 'Морской сад',
    'map.eurovillage': 'Фан-зона',
    'map.beach': 'Пляж',
    'map.quiet': 'Тихо',
    'map.riviera': 'Ривьера',
    'map.min': 'мин',
  },
  bg: {
    'nav.packages': 'Пакети',
    'nav.news': 'Новини',
    'nav.stay': 'Къде да отседнете',
    'nav.transport': 'Транспорт',
    'nav.events': 'Събития',
    'nav.experience': 'Крайбрежие',
    'nav.faq': 'Въпроси',
    'nav.apps': 'Приложения',
    'nav.open': 'Отвори менюто',
    'nav.close': 'Затвори менюто',
    'lang.label': 'Език',
    'footer.team': 'Екипът на местните',
    'footer.about':
      'Burgas 2027 Guide е независим портал за събитието и пътуването. Ние сме бургазлии, влюбени в града и крайбрежието. Пресяваме шума и даваме на феновете, туристите и делегациите проверени места за настаняване, ясни транспортни схеми и честни препоръки по Черноморието.',
    'footer.disclaimer':
      'Уточнение: burgas2027guide.com е независим фенски пътнически портал и не е свързан, одобрен или афилииран с Европейския съюз за радио и телевизия (EBU), Българската национална телевизия (БНТ) или официалния конкурс „Евровизия“.',
    'footer.community': 'Общност и правна информация',
    'footer.telegram': 'Telegram на руски',
    'footer.contact': 'Контакти и за нас',
    'footer.privacy': 'Политика за поверителност',
    'footer.terms': 'Общи условия',
    'footer.partner': 'За партньори',
    'footer.investors': 'За собственици на имоти (B2B)',
    'footer.disclosure': 'Разкриване на партньорски връзки',
    'hero.waitlist': 'Затворен списък на чакащите',
    'hero.waitlistText':
      'Ще ви уведомим първи за старта на продажбата на билети и ще ви дадем достъп до непубличния ни списък с настаняване, преди да дойде тълпата.',
    'hero.emailPlaceholder': 'Вашият имейл',
    'hero.cta': 'Ранен достъп',
    'hero.privacy': 'Уважаваме поверителността ви. Без спам.',
    'hero.telegramPitch': '🇧🇬 Нашият Telegram канал: билети, настаняване, транспорт',
    'hero.telegramCta': 'Присъединете се в Telegram',
    'card.vibe': 'Атмосфера и наоколо:',
    'card.logistics': 'Логистика:',
    'card.insider': 'Съвет от местните:',
    'card.book': 'Вижте наличността',
    'map.title': '📍 Карта на крайбрежието Бургас 2027',
    'map.hint': 'Натиснете точка, за да видите настаняването в този район.',
    'map.north': 'Северно крайбрежие (зона 2)',
    'map.city': 'Град Бургас (зона 1)',
    'map.south': 'Южно крайбрежие (зона 3)',
    'map.budget': 'Бюджет/партита',
    'map.luxury': 'Премиум',
    'map.heritage': 'Наследство',
    'map.relaxed': 'Спокойно',
    'map.airport': 'Летище',
    'map.arena': 'Залата',
    'map.seagarden': 'Морската градина',
    'map.eurovillage': 'Фен зона',
    'map.beach': 'Плаж',
    'map.quiet': 'Тихо',
    'map.riviera': 'Ривиера',
    'map.min': 'мин',
  },
  de: {
    'nav.packages': 'Packages',
    'nav.packages': 'Pakete',
    'nav.news': 'News',
    'nav.stay': 'Unterkunft',
    'nav.transport': 'Anreise',
    'nav.events': 'Events',
    'nav.experience': 'Küste',
    'nav.faq': 'FAQ',
    'nav.apps': 'Apps',
    'nav.open': 'Menü öffnen',
    'nav.close': 'Menü schließen',
    'lang.label': 'Sprache',
    'footer.team': 'Das Team vor Ort',
    'footer.about':
      'Burgas 2027 Guide ist ein unabhängiges Event- und Reiseportal. Wir leben in Burgas und lieben diese Küste. Wir filtern das Rauschen heraus und liefern Fans, Reisenden und Delegationen geprüfte Unterkünfte, verständliche Verkehrsverbindungen und ehrliche Empfehlungen für die Schwarzmeerküste.',
    'footer.disclaimer':
      'Hinweis: burgas2027guide.com ist ein unabhängiges Fan- und Reiseportal und steht in keiner Verbindung zur Europäischen Rundfunkunion (EBU), zum Bulgarischen Nationalfernsehen (BNT) oder zum offiziellen Eurovision Song Contest und wird von diesen weder unterstützt noch autorisiert.',
    'footer.community': 'Community & Rechtliches',
    'footer.telegram': 'Telegram auf Russisch',
    'footer.contact': 'Kontakt & Über uns',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.partner': 'Für Partner',
    'footer.investors': 'Für Vermieter (B2B)',
    'footer.disclosure': 'Affiliate-Hinweis',
    'hero.waitlist': 'Auf die Warteliste',
    'hero.waitlistText':
      'Wir melden uns, sobald der Ticketverkauf startet — und geben Ihnen Zugang zu unserer nicht öffentlichen Unterkunftsliste, bevor der Ansturm beginnt.',
    'hero.emailPlaceholder': 'Ihre E-Mail-Adresse',
    'hero.cta': 'Früher Zugang',
    'hero.privacy': 'Wir respektieren Ihre Privatsphäre. Kein Spam.',
    'hero.telegramPitch': '🇷🇺 Unser Telegram-Kanal (auf Russisch): Tickets, Unterkunft, Anreise',
    'hero.telegramCta': 'Telegram beitreten',
    'card.vibe': 'Umgebung & Sehenswertes:',
    'card.logistics': 'Anfahrt:',
    'card.insider': 'Tipp von uns:',
    'card.book': 'Verfügbarkeit prüfen',
    'map.title': '📍 Küstenkarte Burgas 2027',
    'map.hint': 'Klicken Sie auf einen Punkt, um Unterkünfte in diesem Gebiet zu sehen.',
    'map.north': 'Nordküste (Zone 2)',
    'map.city': 'Stadt Burgas (Zone 1)',
    'map.south': 'Südküste (Zone 3)',
    'map.budget': 'Günstig/Party',
    'map.luxury': 'Premium',
    'map.heritage': 'Altstadt',
    'map.relaxed': 'Ruhig',
    'map.airport': 'Flughafen',
    'map.arena': 'Arena',
    'map.seagarden': 'Meergarten',
    'map.eurovillage': 'EuroVillage',
    'map.beach': 'Strand',
    'map.quiet': 'Still',
    'map.riviera': 'Riviera',
    'map.min': 'Min.',
  },
} as const;

