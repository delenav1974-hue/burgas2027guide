import { ui, LOCALES, DEFAULT_LOCALE, LOCALIZED_ROUTES, type Locale } from './ui';

/** Read the locale from a URL pathname. Falls back to the default locale. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (LOCALES as readonly string[]).includes(first)
    ? (first as Locale)
    : DEFAULT_LOCALE;
}

/** Translation lookup, falling back to English for any missing key. */
export function useTranslations(locale: Locale) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[locale] as Record<string, string>)[key] ?? ui.en[key];
  };
}

/**
 * The route without its locale prefix and without surrounding slashes.
 * `/ru/where-to-stay/` and `/where-to-stay/` both yield `where-to-stay`.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (LOCALES as readonly string[]).includes(parts[0])) {
    parts.shift();
  }
  return parts.join('/');
}

/** Build an absolute path for `route` in `locale`, always trailing-slashed. */
export function localizedPath(route: string, locale: Locale): string {
  const clean = route.replace(/^\/+|\/+$/g, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

/** Whether this route has a real translation in every locale. */
export function isLocalizedRoute(route: string): boolean {
  return (LOCALIZED_ROUTES as readonly string[]).includes(route);
}

/**
 * Where the language switcher should send the reader. Pages that exist in
 * every locale switch in place; anything else falls back to that locale's
 * home page, so the switcher can never produce a 404.
 */
export function switchTarget(pathname: string, locale: Locale): string {
  const route = stripLocale(pathname);
  return localizedPath(isLocalizedRoute(route) ? route : '', locale);
}

export { LOCALES, DEFAULT_LOCALE, type Locale };
