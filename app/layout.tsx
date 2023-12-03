import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
// import { CookiesProvider } from 'react-cookie';
import { theme } from '../theme';
import Header from './ui/Header';
import vazir from './ui/fonts';
import AuthProvider from './Context/context';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={`${vazir.className}`}>
        <MantineProvider theme={theme}>
          <AuthProvider>
            {/* <CookiesProvider> */}
              <Header />
              {children}
            {/* </CookiesProvider> */}
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
