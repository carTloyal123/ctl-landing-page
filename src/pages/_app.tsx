// This file wraps every component page that is shown as the 'Component
// Useful for wrapping everything in clerk auth or other global services

import { type AppType } from "next/app";
import { api } from "~/utils/api";

import { useEffect, useState, type CSSProperties } from "react";
import { GridLoader } from "react-spinners";
import "../styles/globals.css";

import {ClerkProvider} from '@clerk/nextjs'

import "~/styles/globals.css";

// const MyApp: AppType = ({ Component, pageProps }) => {
//   return(
//     <ClerkProvider {...pageProps}>  
//       <Component {...pageProps} />
//     </ClerkProvider>
//   );
// };

const override: CSSProperties = {
  display: "block",
  position: "fixed",
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  // when i do not have a set timeout function, the loader will not go away
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      {!loading ? (
    <ClerkProvider {...pageProps}>  
      <Component {...pageProps} />
    </ClerkProvider>      
    ) : (
        <GridLoader
          loading={loading}
          size={50}
          color={"#3C6C57"}
          cssOverride={override}
        />
      )}
    </>
  );
};

export default api.withTRPC(MyApp);
