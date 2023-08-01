import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ExperienceYlioppilaslakki from "./components/Experience_ylioppilaslakki";
import Customizer from "./components/Customizer";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas>
        <color attach='background' args={["#e6e6e6"]} />
        <fog attach='fog' args={["#e6e6e6", 10, 20]} />
        <ExperienceYlioppilaslakki />
      </Canvas>
      <Customizer />
    </div>
  );
}

export default App;
