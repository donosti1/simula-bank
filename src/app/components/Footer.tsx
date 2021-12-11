import React from "react";
import {Container, Icon, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {IoHelp} from "react-icons/io5";
import {GoLocation} from "react-icons/go";
import {RiCalendarLine, RiGift2Line} from "react-icons/ri";

const Footer = (props: any) => {
  const menuOptions = [
    {id: 1, text: "Ahorros y beneficios", icon: RiGift2Line},
    {id: 2, text: "Sucursales y cajeros", icon: GoLocation},
    {id: 3, text: "Turnos", icon: RiCalendarLine},
    {id: 4, text: "Ayuda", icon: IoHelp},
  ];

  return (
    <Stack backgroundColor="secondary.500">
      <Container variant="sectionContainer">
        <SimpleGrid columns={4} height="20vh">
          {menuOptions.map((item) => (
            <Stack
              key={item.id}
              alignItems="center"
              color="primary.500"
              paddingTop={8}
              paddingX={2}
            >
              <Icon as={item.icon} height={8} width={8} />
              <Text fontSize="xs">{item.text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default Footer;
