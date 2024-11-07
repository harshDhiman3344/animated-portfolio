import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const robot = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Initialize camera, scene, and renderer
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 70, 100000);
    camera.position.set(0, 248.98, 360);
    camera.quaternion.setFromEuler(new THREE.Euler(0.01, 0, 0));

    const scene = new THREE.Scene();

    // Load the Spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/Ec9DmVdRo2nmgPNS/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearAlpha(0);
    scene.background = new THREE.Color('#e3e3e3');

    // Append renderer to the container
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default robot;
