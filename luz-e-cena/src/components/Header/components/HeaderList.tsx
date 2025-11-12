import React from 'react'
import styles from '../Header.module.css'

const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho}>{children}</ul>
  )
}

export default HeaderList