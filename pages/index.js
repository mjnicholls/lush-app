import { useState } from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Product from "../components/Products";
import { Header } from "../components/Header";
import { FooterToo } from "../components/Footer";

export default function Home(edges) {
  const initialState = edges;
  const [products, setProducts] = useState(initialState.products);

  return (
    <>
      <Header />
      <Flex direction="column" justify="center" align="center">
        <Box mb={4} py={8} direction="column" justify="center" align="center">
          <Heading font="h1" mb={8}>
            Lush Cut Out & Keep Range ✂
          </Heading>
          <Product products={products} />
        </Box>
      </Flex>
      <FooterToo />
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://twstg2.eu.saleor.cloud/graphql/",
    // checks to see when graphql was last updated
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        products(
          sortBy: { direction: ASC, channel: "uk", field: NAME }
          channel: "uk"
          last: 46
        ) {
          edges {
            node {
              id
              name
              description
              rating
              created
              pricing {
                onSale
              }
              channel
              thumbnail {
                url
                alt
              }
              availableForPurchase
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.edges,
    },
  };
}
