import styles from '../../styles/components/history.module.css'

export default function () {
  return (
    <div className={styles.history}>
      <div className={styles.title}>History</div>
      <ul className={styles.historyListContainer}>
        <li className={styles.historyItem}>
          Action 3 finished 10 mins ago
      </li>
        <li className={styles.historyItem}>
          Action 2 finished on hour ago
      </li>
        <li className={styles.historyItem}>
          Action 1 finished feb 1, 2013
      </li>
      </ul>
    </div>
  )
}