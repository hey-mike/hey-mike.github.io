import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Meshline } from '../components/meshiline'

import * as styles from './hero.module.css'

const BackGround = styled(Meshline)`
  position: relative;
  width: 100%;
  height: 500px;
`

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image ? (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    ) : (
      <BackGround />
    )}

    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default Hero
