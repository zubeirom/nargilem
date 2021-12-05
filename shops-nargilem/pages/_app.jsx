/* eslint-disable */
import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

const MyApp = function ({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
};

export default MyApp;
