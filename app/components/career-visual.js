"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

// --- 3D Component: Rotating Globe ---
function RotatingGlobe({ color = "#F48244", pointSize = 0.04 }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const speedRef = useRef(0.002); // Slower default rotation

  const count = 3000; // More points for density
  const radius = 5;

  const positions = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      temp[i * 3] = x * radius;
      temp[i * 3 + 1] = y * radius;
      temp[i * 3 + 2] = z * radius;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!ref.current)
      return;

    // Smoothly interpolate speed based on hover
    const targetSpeed = hovered ? 0.012 : 0.002;
    speedRef.current += (targetSpeed - speedRef.current) * 0.05;

    ref.current.rotation.y += speedRef.current;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <points
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={pointSize}
        color={color}
        transparent
        opacity={hovered ? 0.8 : 0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function CareerVisual() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <RotatingGlobe />

      {/* Decorative Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F48244]/5 rounded-full blur-[80px]" />
      </div>
    </div>
  );
}
