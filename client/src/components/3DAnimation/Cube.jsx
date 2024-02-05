import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={10}
          //   enableZoom={false}
        />
        <ambientLight intensity={10} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[3, 3, 3, 1, 1, 1]} />
          <meshStandardMaterial color="rgba(3, 102, 102, 0.993)" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Cube;
