import styles from '../../styles/components/primaryItem.module.css';

export default function() {
  return (
    <div className={styles.primaryItem}>
      <div className={styles.body}>
        <div className={styles.title}>
          Focus Item
        </div>
        <div className={styles.description}>
          This is an item where I will need to work for 3hours
          approximately 
        </div>
      </div>
      <div className={styles.actions}>
        <button>REMOVE</button>
        <button>UNFOCUS</button>
        <button>FINISH</button>
      </div>
    </div>
  )
}
