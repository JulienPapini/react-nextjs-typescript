import React from 'react';
import Head from 'next/head';

import { useTranslation } from '@/i18n/services';

import * as Styled from './home-page.styles';

export type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.Container>
        <Styled.Main>
          <Styled.Title>
            {t('home:pages.homePage.welcomeTo', 'Welcome to')}{' '}
            <a href="https://nextjs.org">Next.js!</a>
          </Styled.Title>

          <Styled.Description>
            {t('home:pages.homePage.getStarted', 'Get started by editing')}{' '}
            <Styled.Code>pages/index.js</Styled.Code>
          </Styled.Description>

          <Styled.Grid>
            <Styled.Card href="https://nextjs.org/docs">
              <h3>{t('home:pages.homePage.documentation', 'Documentation')} &rarr;</h3>
              <p>
                {t(
                  'home:pages.homePage.documentationText',
                  'Find in-depth information about Next.js features and API.',
                )}
              </p>
            </Styled.Card>

            <Styled.Card href="https://nextjs.org/learn">
              <h3>{t('home:pages.homePage.learn', 'Learn')} &rarr;</h3>
              <p>
                {t(
                  'home:pages.homePage.learnText',
                  'Learn about Next.js in an interactive course with quizzes!',
                )}
              </p>
            </Styled.Card>

            <Styled.Card href="https://github.com/vercel/next.js/tree/master/examples">
              <h3>{t('home:pages.homePage.examples', 'Examples')} &rarr;</h3>
              <p>
                {t(
                  'home:pages.homePage.examplesText',
                  'Discover and deploy boilerplate example Next.js projects.',
                )}
              </p>
            </Styled.Card>

            <Styled.Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <h3>{t('home:pages.homePage.deploy', 'Deploy')} &rarr;</h3>
              <p>
                {t(
                  'home:pages.homePage.deployText',
                  'Instantly deploy your Next.js site to a public URL with Vercel.',
                )}
              </p>
            </Styled.Card>
          </Styled.Grid>
        </Styled.Main>

        <Styled.Footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('home:pages.homePage.poweredBy', 'Powered by')}{' '}
            <Styled.Logo src="/vercel.svg" alt="Vercel Logo" />
          </a>
        </Styled.Footer>
      </Styled.Container>
    </>
  );
};
