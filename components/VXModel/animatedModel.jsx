import React, { useRef, useEffect, useState, Suspense, useMemo} from "react";
import { useGLTF, OrbitControls, Stage, BakeShadows,  useAnimations, useCursor} from "@react-three/drei";
import {Canvas, useGraph} from "@react-three/fiber";
import { useSpring } from '@react-spring/three';
import { SkeletonUtils } from "three-stdlib"
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {background} from '../../assets/backgroundTemple.png';

import useStyles from './VXStyles';


function Model({pose, ...props }) {
   
  const group = useRef();
  const {nodes, materials } = useGLTF("/monks0002.gltf");

const {animations, scene} = useGLTF("monks0002.gltf");


  return (
    
    <group ref={group} {...props} dispose={null}
 
    >
      <group>
        <group name="Root-Global" rotation={[-Math.PI, 600, -Math.PI]} scale={[-1, 1, 1]}>
          <group name="Root-Local" />
          <group name="Controller-Global" position={[0, 45, 0]}>
            <group name="Controller-Local" />
            <group name="Hip-Global" position={[0, -0.81, 0]} rotation={[0, 0.14, 0]}>
              <group name="Belly-Global">
                <group name="Belly-Local" />
                <group name="Chest-Global" position={[0, 6, 1]} rotation={[0, -0.05, 0]}>
                  <group name="Head-Global" position={[0, 19, 0]} rotation={[0, -0.07, 0]}>
                    <mesh receiveShadow name="Head-Local" geometry={nodes['Head-Local'].geometry} material={materials['Head-Material']} position={[0, 10, 2.12]} />
                  </group>
                  <group name="Left_Arm-Global" position={[-15, 14.48, 0]} rotation={[0.16, -0.01, -0.11]}>
                    <mesh receiveShadow name="Left_Arm-Local" geometry={nodes['Left_Arm-Local'].geometry} material={materials['L_Arm-Material']} position={[-0.81, -4.54, 0.97]} />
                    <group name="Left_Forearm-Global" position={[-0.5, -15, -0.5]} rotation={[-0.41, 0, 0.12]}>
                      <mesh receiveShadow name="Left_Forearm-Local" geometry={nodes['Left_Forearm-Local'].geometry} material={materials['L_Forearm-Material']} position={[-0.5, -6.96, 1]} />
                      <group name="Left_Hand-Global" position={[0, -15, -0.5]} rotation={[0.34, -1.46, 1.78]}>
                        <mesh receiveShadow name="Left_Hand-Local" geometry={nodes['Left_Hand-Local'].geometry} material={materials['LeftHand-Material']} position={[-8.88, -2, 0.5]} />
                      </group>
                    </group>
                  </group>
                  <group name="Right_Arm-Global" position={[15, 14.48, 0]} rotation={[0.21, 0.02, 0.11]}>
                    <mesh receiveShadow name="Right_Arm-Local" geometry={nodes['Right_Arm-Local'].geometry} material={materials['R_Arm-Material']} position={[0.81, -4.54, 0.97]} />
                    <group name="Right_Forearm-Global" position={[0.5, -15, 0]} rotation={[-0.36, 0, -0.16]}>
                      <mesh receiveShadow name="Right_Forearm-Local" geometry={nodes['Right_Forearm-Local'].geometry} material={materials['R_Forearm-Material']} position={[0.5, -6.96, 1]} />
                      <group name="Right_Hand-Global" position={[0, -15, -0.5]} rotation={[0.08, 1.32, -1.61]}>
                        <mesh receiveShadow name="Right_Hand-Local" geometry={nodes['Right_Hand-Local'].geometry} material={materials['RightHand-Material']} position={[4.3, -2, 2]} />
                        <group name="Equip_Right_Hand-Global">
                          <group name="Equip_Right_Hand-Local" />
                          <group name="Handle-Global">
                            <group name="Handle-Local" />
                            <group name="blade-Global">
                              <group name="blade-Local" />
                            </group>
                          </group>
                        </group>
                        <group name="Equip_Spawn-Global">
                          <group name="Equip_Spawn-Local" />
                        </group>
                      </group>
                    </group>
                  </group>
                  <mesh name="Chest-Local" geometry={nodes['Chest-Local'].geometry} material={materials['Chest-Material']} position={[0, 13.5, -6]} />
                </group>
              </group>
              <group name="Right_Thigh-Global" position={[6, -4, 0.5]} rotation={[-0.16, 0.01, 0.08]}>
                <group name="Right_Leg-Global" position={[0, -20, -1.5]} rotation={[0.49, 0, 0]}>
                  <group name="Right_Foot-Global" position={[-0.36, -16.08, 0.42]} rotation={[-0.3, 0.15, -0.08]}>
                    <mesh name="Right_Foot-Local" geometry={nodes['Right_Foot-Local'].geometry} material={materials['R_Foot-Material']} position={[0, -1.67, 3.64]} />
                  </group>
                  <mesh receiveShadow name="Right_Leg-Local" geometry={nodes['Right_Leg-Local'].geometry} material={materials['R_Leg-Material']} position={[-0.29, -6.34, 1.6]} />
                </group>
                <mesh receiveShadow name="Right_Thigh-Local" geometry={nodes['Right_Thigh-Local'].geometry} material={materials['R_Thigh-Material']} position={[-0.04, -9.99, 1.01]} />
              </group>
              <group name="Left_Thigh-Global" position={[-6, -4, 0.5]} rotation={[-0.3, -0.25, -0.12]}>
                <group name="Left_Leg-Global" position={[0, -20, -1.5]} rotation={[0.52, 0, 0]}>
                  <group name="Left_Foot-Global" position={[0, -16, 0.5]} rotation={[-0.22, -0.14, 0.06]}>
                    <mesh receiveShadow name="Left_Foot-Local" geometry={nodes['Left_Foot-Local'].geometry} material={materials['L_Foot-Material']} position={[1, -1.67, 3.64]} />
                  </group>
                  <mesh receiveShadow name="Left_Leg-Local" geometry={nodes['Left_Leg-Local'].geometry} material={materials['L_Leg-Material']} position={[1, -6.34, 1.6]} />
                </group>
                <mesh receiveShadow name="Left_Thigh-Local" geometry={nodes['Left_Thigh-Local'].geometry} material={materials['L_Thigh-Material']} position={[0.04, -9.99, 1.01]} />
              </group>
              <mesh receiveShadow name="Hip-Local" geometry={nodes['Hip-Local'].geometry} material={materials['Hip-Material']} position={[0, 0, 1]} />
            </group>
          </group>
        </group>
      </group>
    </group>


  ) }

  useGLTF.preload("/monks0002.gltf");

  export default Model;
  