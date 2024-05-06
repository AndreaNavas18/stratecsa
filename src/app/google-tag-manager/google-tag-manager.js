// pages/google-tag-manager.js

import Head from 'next/head';

const GoogleTagManagerr = () => (
  <Head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-882387719"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-882387719');
        `,
      }}
    />
  </Head>
);

export default GoogleTagManagerr;
