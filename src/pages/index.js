import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "@fontsource/onest"; // defaults to 400
import { keyframes, css } from "styled-components";

// import LavaLampBackground from "../components/LavaLampBackground";

const Page = styled.main`
  height: 100vh;
  margin: 0;
  background: radial-gradient(
    circle at ${(props) => props.x}px ${(props) => props.y}px,
    rgba(255, 105, 180, 0.35) 0%,    /* hot pink */
    rgba(255, 179, 71, 0.3) 40%,   /* soft orange */
    rgba(238, 130, 238, 0.25) 100%   /* violet */
  ),
  radial-gradient(
    circle at ${(props) => 1000 - props.x}px ${(props) => 600 - props.y}px,
    rgba(255, 140, 0, 0.35) 0%,      /* dark orange */
    rgba(199, 21, 133, 0.3) 50%,   /* medium violet red */
    rgba(255, 192, 203, 0.25) 100%   /* pink */
  );
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const Name = styled.h1`
  font-family: "Onest", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #111;
  text-shadow: 0 1px 4px rgba(255, 182, 193, 0.6);
  

`;

const Subtitle = styled.p`
  font-family: "Onest", sans-serif;
  font-size: 1.2rem;
  color: #555;
  margin-top: 0.01rem;
  text-shadow: 0 1px 4px rgba(255, 182, 193, 0.6);

`;

const morph = keyframes`
  0% {
    border-radius: 58% 42% 38% 62% / 50% 60% 40% 50%;
    transform: scale(1);
  }
  20% {
    border-radius: 62% 38% 45% 55% / 60% 45% 55% 40%;
    transform: scale(1.015);
  }
  40% {
    border-radius: 55% 48% 52% 45% / 55% 50% 60% 45%;
    transform: scale(1.01);
  }
  60% {
    border-radius: 65% 35% 40% 60% / 58% 42% 50% 50%;
    transform: scale(1.02);
  }
  80% {
    border-radius: 53% 47% 60% 40% / 52% 58% 47% 53%;
    transform: scale(1.008);
  }
  100% {
    border-radius: 58% 42% 38% 62% / 50% 60% 40% 50%;
    transform: scale(1);
  }
`;



const TextContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  padding: 3.25rem 5rem;
  max-width: 360px;
  margin: auto;
  color: rgba(50, 10, 50, 0.85);
  font-family: "Onest", sans-serif;
  text-align: center;

  border-radius: 70% 40% 40% 65% / 55% 70% 40% 45%;

  box-shadow: 0 4px 15px rgba(255, 182, 193, 0.3);

  animation: ${morph} 10s ease-in-out infinite;
`;



const IndexPage = () => {
  
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
    {/* <LavaLampBackground /> */}

    <Page x={mousePos.x} y={mousePos.y}>
      <TextContainer>
        <Name>idil aydın</Name>
        <Subtitle>MSc Student in Comp Neuro </Subtitle>
      </TextContainer>
    </Page>
  </>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
