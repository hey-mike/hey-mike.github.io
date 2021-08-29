import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ArticlePreviewCard from './article-preview-card'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview-static.module.css'

const ArticlePreviewStatic = ({ posts, title }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul
        className={styles.articleList}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
      >
        {posts.map((post) => {
          return (
            <article key={post.slug} className={styles.article}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <div className={styles.articleContent}>
                  <h2 className={styles.title}>{post.title}</h2>

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
            </article>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreviewStatic
