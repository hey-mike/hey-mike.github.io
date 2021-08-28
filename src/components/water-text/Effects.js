import * as THREE from 'three'
import React, { useRef, useMemo, useEffect, useState } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { GlitchPass } from './post/Glitchpass'
import { WaterPass } from './post/Waterpass'
import { useInterval } from '../../hooks/useInterval'

extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  WaterPass,
  UnrealBloomPass,
  FilmPass,
  GlitchPass,
})

export default function Effects({ down }) {
  const composer = useRef()
  const [factor, setFactor] = useState(0)

  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  )
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  )

  // the time for distortion
  useInterval(() => {
    setFactor(0)
  }, 1000)

  useInterval(() => {
    setFactor(1)
  }, 5000)

  useFrame(() => composer.current.render(), 1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <waterPass attachArray="passes" factor={0.8} />
      <unrealBloomPass attachArray="passes" args={[aspect, 1, 1, 0]} />
      <glitchPass attachArray="passes" factor={factor} />
    </effectComposer>
  )
}
