import React, {useEffect} from "react";
import {Image, Stack, Text} from "@chakra-ui/react";

import Routes from "./routes";
import Login from "./screens/Login";
import Splash from "./screens/Splash";

import Logo from "/public/assets/logo_app.png";

const Landing = (props: any) => {
  const [loginScreen, setLoginScreen] = React.useState<boolean>(true);

  return loginScreen ? <Login /> : <Splash />;
};

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  //IsLoggedIn + Spinner de Cargar hasta contar con esa info.

  // Recibir step con los distintos elementos del Step
  //isLoggedIn && stepTitle ? setStep
  return (
    <>
      {loading ? (
        <Stack
          alignItems="center"
          bgGradient="linear(to-b, primary.600, primary.500)"
          h="100vh"
          justifyContent="center"
        >
          <Image src={Logo} width={48} />
        </Stack>
      ) : !isLoggedIn ? (
        <Landing />
      ) : (
        <Stack height="100vh" justifyContent="space-between">
          <Routes />
        </Stack>
      )}
    </>
  );
};

export default App;
