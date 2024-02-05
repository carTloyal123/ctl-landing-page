import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);

// import '../styles/globals.css';
// import '../styles/Standard.css'
// import type { AppProps } from 'next/app'
// import Script from 'next/script';


// function MyApp({ Component, pageProps }: AppProps) {
  
//   return (
//       <Component {...pageProps} />
//   )
// }

// export default MyApp