import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

export const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
