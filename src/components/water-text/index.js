import * as THREE from 'three'
import React, {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import lerp from 'lerp'
import Text from './Text'
import Effects from './Effects'
import Sparks from './Sparks'
import Particles from './Particles'
import * as styles from './water-text.module.css'

function Name({ mouse, hover, text }) {
  const ref = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  useFrame((state) => {
    if (ref.current) {
    }
  })
  return (
    <Suspense fallback={null}>
      <group ref={ref}>
        <Text
          size={10}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          {text}
        </Text>
      </group>
    </Suspense>
  )
}

export default function WaterText(props) {
  const [hovered, hover] = useState(false)
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <div className={styles.canvas}>
      <Canvas
        linear
        dpr={[1, 2]}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
        }}
        onMouseUp={() => set(false)}
        onMouseDown={() => set(true)}
      >
        <fog attach="fog" args={['white', 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Name mouse={mouse} hover={hover} text={props.text} />
        <Particles count={5000} mouse={mouse} />
        <Sparks
          count={20}
          mouse={mouse}
          colors={[
            '#A2CCB6',
            '#FCEEB5',
            '#EE786E',
            '#e0feff',
            'lightpink',
            'lightblue',
          ]}
        />
        <Effects down={down} />
      </Canvas>
    </div>
  )
}
