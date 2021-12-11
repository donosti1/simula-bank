import React, {Children} from "react";
import {Image, Stack, Text} from "@chakra-ui/react";

import Logo from "/public/assets/logo_app.png";

import NavBar from "./NavBar";
interface Props {
  hasMenu: boolean;
  showLogo: boolean;
  step: number;
  stepTitle: string;
}
const Header = (props: Props) => {
  //props.step == "login"
  return (
    <Stack alignItems="center" backgroundColor="primary.500" height="10vh" justifyContent="center">
      {props.showLogo && !props.hasMenu ? <Image src={Logo} /> : <NavBar {...props} />}
    </Stack>
  );
};

export default Header;
