import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [<>{initialProps.styles}</>]
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        {CssBaseline.flush()}
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='application-name' content='Closed[in] Blog' />
        <meta name='description' content='Hotspot gen' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#f8cd86' />
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
