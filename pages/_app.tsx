import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import type { AppProps } from 'next/app'

Amplify.configure(config);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withAuthenticator(App);