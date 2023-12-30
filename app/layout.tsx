import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { theme } from '../theme';
import Header from './ui/Header';
import vazir from './ui/fonts';
import AuthProvider from './Context/context';

export const metadata: Metadata = {
  title: {
    template: '%s | ریسلو',
    default: 'ریسلو',
  },
  description: 'simple risloo project powered by mantine',
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
            <Header />
            {children}
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
