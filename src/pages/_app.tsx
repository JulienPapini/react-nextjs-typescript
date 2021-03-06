import React from 'react';
import NextApp from 'next/app';
import { GlobalStyles } from 'twin.macro';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default App;
