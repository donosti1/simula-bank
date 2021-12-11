import React from "react";
import {Link, Text} from "@chakra-ui/react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const HomeScreen: React.FC = () => {
  const [step, setStep] = React.useState<number>(0);
  const [stepTitle, setStepTitle] = React.useState<string>("xxx");

  return (
    <>
      <Header hasMenu={true} showLogo={true} step={step} stepTitle={stepTitle} />
      {/* <Footer step={step} stepTitle={stepTitle} /> */}
    </>
  );
};

export default HomeScreen;
