import { React } from "react";
import { useState } from "react";
import Image from "next/image";
import ReactBSAlert from "react-bootstrap-sweetalert";
import {
  Heading,
  SimpleGrid,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

const Product = ({ products }) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const productModal = (props) => {
    setAlert(
      <ReactBSAlert
        onConfirm={hideAlert}
        onCancel={hideAlert}
        showConfirm={false}
        showCloseButton
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          border="dashed black 1px"
        >
          <Image
            src={props.node.thumbnail.url}
            alt={props.node.thumbnail.alt}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />

          <Stack>
            <CardBody>
              <Heading size="md" py="2" align="left">
                {props.node.name}
              </Heading>
              {props.node.rating === null || "" || 0 ? (
                <Text py="2" align="left">
                  Product rating: None
                </Text>
              ) : (
                <Text py="2" align="left">
                  Product rating: {props.node.rating}
                </Text>
              )}
              {props.node.pricing.onSale === false ? (
                <>
                  <Text py="2" align="left">
                    Availablity: Out of stock
                  </Text>
                  <Text py="2" align="left">
                    Back in stock: {props.node.availableForPurchase}
                  </Text>
                </>
              ) : (
                <Text py="2" align="left">
                  Availablity: In Stock
                </Text>
              )}
            </CardBody>

            <CardFooter>
              <Text color="blue.600" fontSize="2xl">
                $1.25
              </Text>
            </CardFooter>
            <CardFooter>
              <Button variant="solid" colorScheme="blue" flex="end">
                Add to Cart
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {products
          .filter((v) => v.node.thumbnail !== null)
          .map((product, i) => {
            return (
              <Card maxW="sm" key={i}>
                <CardBody border="dashed black 1px">
                  <Image
                    src={product.node.thumbnail.url}
                    alt={product.node.thumbnail.alt}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{product.node.name}</Heading>
                    {product.node.pricing.onSale === false ? (
                      <>
                        <Text py="2">Out of stock</Text>
                      </>
                    ) : (
                      <Text py="2">In Stock</Text>
                    )}
                    <Text color="blue.600" fontSize="2xl">
                      $1.25
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={(e) => {
                        productModal(product, true);
                        e.stopPropagation();
                      }}
                      id={`product_${product.node.id}`}
                    >
                      Learn More
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default Product;
