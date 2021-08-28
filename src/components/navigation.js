import React from 'react'
import { Link } from 'gatsby'
import { Github, LinkedinIn } from '@styled-icons/fa-brands'
import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Michael Luo</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://github.com/hey-mike" activeClassName="active">
          <Github size={28} />
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          to="https://www.linkedin.com/in/michael-luo-10066110a/"
          activeClassName="active"
        >
          <LinkedinIn size={28} />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
