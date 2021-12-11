import React from "react";
import {Button, Stack, Text} from "@chakra-ui/react";

import Header from "../components/Header";
interface Props {
  showLogin?: boolean;
}
const Splash = (props: Props) => {
  return (
    <Stack>
      <Header hasMenu={false} showLogo={true} step={0} stepTitle="" />
      <Stack paddingX={4} spacing={12}>
        <Text color="primary.600" fontSize="xl" fontWeight="700" paddingY={6} textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur elit.
        </Text>
        <Button font size="lg" variant="pata">
          Ya soy cliente
        </Button>
        <Button size="lg" variant="outline">
          Quiero ser cliente
        </Button>
      </Stack>
    </Stack>
  );
};

export default Splash;
