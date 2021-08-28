import React from 'react'

import * as styles from './blog-title.module.css'

const BlogTitle = ({ image, title, content, post }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}

      <span className={styles.meta}>
        {post.author.name} &middot;{' '}
        <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
        {post.body.childMarkdownRemark.timeToRead} minute read
      </span>
    </div>
  </div>
)

export default BlogTitle
