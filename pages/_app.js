import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bodoni-moda";

const theme = extendTheme({
  fonts: {
    body: `'Bodoni Moda', serif`,
    heading: `'Bodoni Moda', serif`,
  },
  font: {
    h1: "14px",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
