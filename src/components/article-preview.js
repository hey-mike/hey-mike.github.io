import React from 'react'
import { motion } from 'framer-motion'

import Container from './container'
import ArticlePreviewCard from './article-preview-card'
import { StaggerWrap } from './stagger-wrap'
import { FadeInUpBox } from './fade-in-up-box'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <StaggerWrap>
        <ul className={styles.articleList}>
          {posts.map((post) => {
            return (
              <FadeInUpBox key={post.slug}>
                <ArticlePreviewCard post={post} />
              </FadeInUpBox>
            )
          })}
        </ul>
      </StaggerWrap>
    </Container>
  )
}

export default ArticlePreview
