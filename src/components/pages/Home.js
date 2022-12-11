import React from "react";
import HeroSection from "../UI/HeroSection";
// import ServicesCard from "..//ServicesCard";
// import mainBanner from "../UI/OtherImages/mainbanner.jpg";
// import Slider from "../UI/Slider";

export default function Home(props) {
  document.title = "PKM Punjab";

  return (
    <>
      {/* <Slider {...props.changeProgress(20)} /> */}
      <HeroSection {...props.changeProgress(100)} />
      {/* <ServicesCard {...props.changeProgress(100)} /> */}
    </>
  );
}
