import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Meshline } from './meshiline'
import WaterText from '../components/water-text'

import * as styles from './hero-dynamic.module.css'

const BackGround = styled(Meshline)`
  position: relative;
  width: 100%;
  height: 500px;
`

const HeroDynamic = ({ image, title, content }) => (
  <div className={styles.hero}>
    <WaterText text={'Michael Luo'} />
    <div className={styles.details}>
      {/* <h1 className={styles.title}>{title}</h1> */}
      {content && <h1 className={styles.title}>{content}</h1>}
      {/* {content && <p className={styles.content}>{content}</p>} */}
    </div>
  </div>
)

export default HeroDynamic
