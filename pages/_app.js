import '../styles/globals.css'
/*CSS for carousel*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={'dev-8waui1xh.us.auth0.com'}
      clientId={'LAfqLQnQYg0UCE1TeXK3vqyY4YGKr5dX'}
      redirectUri={'http://localhost:3001/'}>
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
