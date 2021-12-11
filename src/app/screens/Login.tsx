import React, {useState} from "react";
import {
  Button,
  Checkbox,
  Container,
  Icon,
  Input,
  FormControl,
  FormHelperText,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import {AiOutlineLock} from "react-icons/ai";

import Header from "../components/Header";
import Footer from "../components/Footer";
const Login: React.FC = (props: any) => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const Accept = () => {
    return (
      <Container variant="sectionContainer">
        <Stack height="15vh" justifyContent="center">
          <Text color="primary.600" fontSize="lg" fontWeight="700" textTransform="uppercase">
            Por favor lea este acuerdo:
          </Text>
        </Stack>
        <Stack height="60vh" overflow="scroll" textAlign="justify">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore, dolorum id
            doloremque, quam dolorem inventore sequi optio obcaecati quisquam ullam, beatae quos
            ipsum voluptas nisi. Consequatur porro sapiente atque non omnis illum minima quos
            accusantium reiciendis minus. Magnam aut cupiditate dolor! Molestiae natus repellendus
            id odit omnis ullam commodi dolor nihil illum molestias? Quisquam magnam provident non
            facere error?{" "}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore, dolorum id
            doloremque, quam dolorem inventore sequi optio obcaecati quisquam ullam, beatae quos
            ipsum voluptas nisi. Consequatur porro sapiente atque non omnis illum minima quos
            accusantium reiciendis minus. Magnam aut cupiditate dolor! Molestiae natus repellendus
            id odit omnis ullam commodi dolor nihil illum molestias? Quisquam magnam provident non
            facere error?{" "}
          </Text>
        </Stack>
        <Stack height="15vh" justifyContent="center">
          <Button fontSize="md" variant="pata" onClick={() => setShowDisclaimer(false)}>
            Aceptar
          </Button>
        </Stack>
      </Container>
    );
  };
  const tiposDoc = [
    {id: 0, label: "DNI", inputType: "number"},
    {id: 1, label: "LE", inputType: "number"},
    {id: 2, label: "Pasaporte", inputType: "text"},
    {id: 3, label: "Usuario", inputType: "text"},
  ];
  const DocField = () => {
    const [idDocSelected, setIdDocSelected] = useState(0);
    const [value, setValue] = useState("");
    const [fieldFocus, setFieldFocus] = useState<boolean>(false);
    const positionFieldLabel = value != "" || fieldFocus ? 6 : 1;

    const fieldType = {
      ...tiposDoc.filter((doc) => doc.id == idDocSelected).map((doc) => doc.inputType),
    };
    const fieldLabel = {
      ...tiposDoc.filter((doc) => doc.id == idDocSelected).map((doc) => doc.label),
    };

    //console.log(fieldLabel[0]);

    return (
      <Stack
        borderBottom="solid"
        borderBottomColor="secondary.900"
        borderBottomWidth={2}
        direction="row"
        marginBottom={2}
      >
        <Stack width={24}>
          <Select
            variant="unstyled"
            onChange={(event) => setIdDocSelected(Number(event.currentTarget.value))}
          >
            {tiposDoc.map((doc) => {
              return (
                <option key={doc.id} value={doc.id}>
                  {doc.label}
                </option>
              );
            })}
          </Select>
        </Stack>
        <FormControl>
          <Input
            type={fieldType[0]}
            value={value}
            variant="unstyled"
            onBlur={() => setFieldFocus(false)}
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFieldFocus(true)}
          />
          <FormHelperText bottom={positionFieldLabel} pointerEvents="none" position="absolute">
            {fieldLabel[0]}
          </FormHelperText>
        </FormControl>
      </Stack>
    );
  };
  const PassField = () => {
    const [value, setValue] = useState("");
    const [fieldFocus, setFieldFocus] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const positionFieldLabel = value != "" || fieldFocus ? 6 : 1;

    return (
      <Stack
        borderBottom="solid"
        borderBottomColor="secondary.900"
        borderBottomWidth={2}
        marginBottom={4}
      >
        <Stack alignItems="flex-end" direction="row" justifyContent="space-between">
          <Stack spacing={0}>
            <FormControl>
              <Input
                type={showPassword ? "text" : "password"}
                value={value}
                variant="unstyled"
                onBlur={() => setFieldFocus(false)}
                onChange={(event) => setValue(event.currentTarget.value)}
                onFocus={() => setFieldFocus(true)}
              />
              <FormHelperText bottom={positionFieldLabel} pointerEvents="none" position="absolute">
                Clave
              </FormHelperText>
            </FormControl>
          </Stack>
          <Stack paddingX={4}>
            <Button
              color="primary.500"
              variant="unstyled"
              onClick={() => setShowPassword(!showPassword)}
            >
              Mostrar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  };

  const LoginForm = () => {
    return (
      <>
        <Container variant="sectionContainer">
          <Stack paddingTop={6} spacing={6} textAlign="center">
            <form onSubmit={(event) => event.preventDefault()}>
              <DocField />
              <PassField />
              <Stack paddingTop={0}>
                <Checkbox _checked={{background: "secondary.900"}}>Recordarme</Checkbox>
              </Stack>
              <Stack paddingTop={6}>
                <Button fontSize="md" variant="pata" onClick={() => setShowDisclaimer(false)}>
                  Aceptar
                </Button>
              </Stack>
            </form>
            <Stack alignItems="center" direction="row" justifyContent="center">
              <Icon as={AiOutlineLock} color="primary.500" height={8} width={8} />
              <Text color="primary.500" fontWeight="700">
                Token Patagonia
              </Text>
            </Stack>
            <Stack
              alignSelf="center"
              color="primary.500"
              fontWeight="700"
              textAlign="center"
              width={48}
            >
              <Text>No tengo usuario / clave o no lo recuerdo</Text>
            </Stack>
          </Stack>
        </Container>
        <Footer />
      </>
    );
  };

  return (
    <>
      <Header hasMenu={false} showLogo={true} step={0} stepTitle="" />
      <Stack height="90vh" justifyContent="space-between" spacing={4}>
        {showDisclaimer ? <Accept /> : <LoginForm />}
      </Stack>
    </>
  );
};

export default Login;
