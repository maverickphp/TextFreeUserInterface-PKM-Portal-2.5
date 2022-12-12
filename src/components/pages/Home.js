import React from "react";
import HeroSection from "../UI/HeroSection";

export default function Home(props) {
  document.title = "PKM Punjab";

  return (
    <>
      <HeroSection {...props.changeProgress(100)} />
    </>
  );
}
