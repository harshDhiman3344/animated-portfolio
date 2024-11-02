import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../3d/spaceman.glb";
import CanvasLoader from "./Loader";

const Spaceman = ({ scale, position }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  const [rotationY, setRotationY] = useState(0);
  const rotationSpeed = 0.0005; // Rotation speed in radians per millisecond

  useEffect(() => {
    actions["Idle"].play();
  }, [actions]);

  useEffect(() => {
    let previousTime = performance.now();

    const animate = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      setRotationY(prevRotationY => (prevRotationY + rotationSpeed * deltaTime) % (2 * Math.PI));
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, [rotationSpeed]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={[0, rotationY, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = () => {
  const scale = [2.5, 2.5, 2.5];
  const position = [4, -1.2, -1]; // Adjust as needed

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
