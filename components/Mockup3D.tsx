'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function MockupScreen() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]} castShadow>
        {/* Main screen */}
        <boxGeometry args={[4, 2.5, 0.1]} />
        <meshStandardMaterial
          color="#1A1A22"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Screen glow */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[3.8, 2.3]} />
        <meshStandardMaterial
          color="#6366F1"
          emissive="#6366F1"
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </mesh>

      {/* Frame accent */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[4.1, 2.6, 0.05]} />
        <meshStandardMaterial
          color="#252530"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <MockupScreen />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  );
}

export default function Mockup3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass rounded-full">
            <span className="gradient-text">Experience</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for
            <br />
            <span className="gradient-text">Modern Creators</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A seamless, intuitive interface designed for productivity and results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[600px] glass rounded-3xl overflow-hidden"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent-primary"></div>
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              gl={{ alpha: true, antialias: true }}
            >
              <Scene />
            </Canvas>
          </Suspense>

          {/* Decorative elements */}
          <div className="absolute top-8 left-8 glass rounded-xl p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
              <div>
                <div className="h-3 w-24 bg-text-muted/20 rounded mb-2" />
                <div className="h-2 w-16 bg-text-muted/10 rounded" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 glass rounded-xl p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-text-secondary">Live Analytics</span>
            </div>
            <div className="text-3xl font-bold gradient-text">+247%</div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '1M+', label: 'Posts Created' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center glass glass-hover rounded-xl p-6">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
