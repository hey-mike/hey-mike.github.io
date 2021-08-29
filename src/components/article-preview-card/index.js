import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

import Tags from '../tags'

import * as styles from './article-preview-card.module.css'

const CardVariants = {
  beforeHover: {},
  onHover: {
    scale: 1.1,
  },
}

const ArticlePreviewCard = ({ post }) => {
  return (
    <React.Fragment>
      <motion.article
        className={styles.article}
        variants={CardVariants}
        initial="beforeHover"
        whileHover="onHover"
      >
        <Link to={`/blog/${post.slug}`} className={styles.link}>
          <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
          <div className={styles.articleContent}>
            <h3 className={styles.title}>{post.title}</h3>

            <div
              dangerouslySetInnerHTML={{
                __html: post.description.childMarkdownRemark.html,
              }}
            />
            <div className={styles.meta}>
              <small className="meta">{post.publishDate}</small>
              <Tags tags={post.tags} />
            </div>
          </div>
        </Link>
      </motion.article>
    </React.Fragment>
  )
}

export default ArticlePreviewCard
