import React from 'react'
import { motion } from 'framer-motion'

import Container from './container'
import ArticlePreviewCard from './article-preview-card'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <motion.ul
        className={styles.articleList}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
      >
        {posts.map((post) => {
          return <ArticlePreviewCard post={post} />
        })}
      </motion.ul>
    </Container>
  )
}

export default ArticlePreview
