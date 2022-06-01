import React, {Suspense} from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const GLTFModels = () => {
  
    const gltf = useLoader(GLTFLoader, './monks0002.gltf')
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
  )
}

export default GLTFModels