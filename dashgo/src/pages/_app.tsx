import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SiderBarProvider } from "../context/useSiderBarDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiderBarProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SiderBarProvider>
  );
}

export default MyApp;
