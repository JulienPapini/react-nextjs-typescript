import React from 'react';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

export const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
