import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import React, { Suspense,useRef, useEffect, useState } from 'react'
import { Canvas ,extend, useThree, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


extend({ OrbitControls })

function Hardware() {
  const [scene, set] = useState()
  useEffect(() => {
  new GLTFLoader().load("monks0002.gltf", gltf => {
    set(gltf.scene)
    const mixer = new THREE.AnimationMixer(gltf.scene)
    gltf.animations.forEach(clip => mixer.clipAction(clip).play())
  })
}, [])

return scene ? <primitive object={scene} /> : null

}

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}
const AnimatedElement = () => {
  return (
    <Canvas style={{height: '800px'}}camera={{ position: [0, 0, 160] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Controls/>
      <Suspense fallback={null}>
        <Hardware/>
      </Suspense>
    </Canvas>
  )
}

export default AnimatedElement;