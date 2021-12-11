import React, {useState} from "react";
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconProps,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {AiFillPlayCircle, AiOutlineHome, AiOutlineMenu} from "react-icons/ai";

import Logo from "/public/assets/logo_app.png";

/* import sidebar from "../mock/sidebar.json";
import {sidebarItem} from "../mock/sidebarItem"; */

interface Props {
  hasMenu: boolean;
  showLogo: boolean;
  step: number;
  stepTitle: string;
}
const sidebar = [
  {id: 0, label: "Cuenta", icon: AiFillPlayCircle},
  {id: 1, label: "MODO", icon: AiFillPlayCircle},
  {id: 2, label: "Tarjetas de crédito", icon: AiFillPlayCircle},
  {id: 3, label: "Inversiones", icon: AiFillPlayCircle},
  {id: 4, label: "Club Patagonia", icon: AiFillPlayCircle},
];
const NavBar = (props: Props) => {
  //const sidebarItems: {[key: string]: any} = sidebar as sidebarItem[];

  //console.log(sidebarItems);
  //const [openMenu, setOpenMenu] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Stack
        alignItems="center"
        backgroundColor="primary.500"
        color="white"
        direction="row"
        height="10vh"
        justifyContent="space-between"
        paddingX={4}
        width="100%"
      >
        <Button ref={btnRef} variant="unstyled" onClick={onOpen}>
          <Icon as={AiOutlineMenu} />
          {/* <Icon as={isOpen ? AiOutlineCloseCircle : AiOutlineMenu} /> */}
        </Button>
        {props.showLogo ? <Image src={Logo} /> : <Text>{props.stepTitle}</Text>}
        <Stack width={6}>{props.step != 0 && <Icon as={AiOutlineHome} />}</Stack>
      </Stack>
      <Drawer initialFocusRef={btnRef} isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
        <DrawerContent marginTop="10vh" width="90vw">
          <DrawerHeader borderBottom="solid gray 1px">
            <Text>USERNAME</Text>
          </DrawerHeader>
          <DrawerBody padding={0}>
            <Stack divider={<Divider style={{marginTop: 0, marginBottom: 0}} />} paddingX={4}>
              {sidebar.map((item: any) => {
                return (
                  <Stack key={item.id} alignItems="center" direction="row" paddingY={2}>
                    <Icon as={item.icon} color="primary.500" height={6} width={6} />
                    <Text>{item.label}</Text>
                  </Stack>
                );
              })}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
