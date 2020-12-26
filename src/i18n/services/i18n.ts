import path from 'path';

import { NextComponentType, NextPageContext } from 'next';
import getNextRuntimeConfig from 'next/config';
import NextI18Next from 'next-i18next';

const { localeSubpaths } = getNextRuntimeConfig().publicRuntimeConfig;

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;

const nextI18Next = new NextI18Next({
  strictMode: false,
  otherLanguages: ['fr'],
  defaultLanguage: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  localePath: path.resolve('public/assets/locales/'),
  localeSubpaths,
});

export const { appWithTranslation, useTranslation } = nextI18Next;

export const includeDefaultNs = (ns: string[]) => ['common', 'error'].concat(ns);
