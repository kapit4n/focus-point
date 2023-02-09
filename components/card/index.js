import React from 'react'

import styles from '../../styles/components/card.module.css'

export default function Index() {
  return (
    <div className={styles.card}>
      <div className={styles.description}>Description</div>
      <div className={styles.actions}>
        <button>x</button>
        <button>focus</button>
      </div>
    </div>
  )
}
