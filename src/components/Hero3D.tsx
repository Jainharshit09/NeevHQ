import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Pulse effect when hovered
      if (hovered) {
        sphereRef.current.scale.x = THREE.MathUtils.lerp(
          sphereRef.current.scale.x,
          1.2,
          0.1
        );
        sphereRef.current.scale.y = sphereRef.current.scale.x;
        sphereRef.current.scale.z = sphereRef.current.scale.x;
      } else {
        sphereRef.current.scale.x = THREE.MathUtils.lerp(
          sphereRef.current.scale.x,
          1,
          0.1
        );
        sphereRef.current.scale.y = sphereRef.current.scale.x;
        sphereRef.current.scale.z = sphereRef.current.scale.x;
      }
    }
  });

  return (
    <group>
      <motion.mesh
        ref={sphereRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={hovered ? "#6366f1" : "#4338ca"}
          wireframe
          transparent
          opacity={0.5}
        />
      </motion.mesh>
      
      <mesh scale={0.8}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#818cf8"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas className="w-full h-[600px]">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <AnimatedSphere />
    </Canvas>
  );
}