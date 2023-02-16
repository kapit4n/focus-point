import React from 'react'

import styles from '../../styles/components/secondaryItem.module.css'

export default function Index({item}) {

  return (
    <div className={styles.card}>
      <div className={styles.description}>
        {item.name}
      </div>
      <div className={styles.actions}>
        <button>REMOVE</button>
        <button>FOCUS</button>
      </div>
    </div>
  )
}
