import styles from '../../styles/components/primaryItem.module.css';

export default function({item}) {
  return (
    <div className={styles.primaryItem}>
      <div className={styles.body}>
        <div className={styles.title}>
          {item?.name}
        </div>
        <div className={styles.description}>
        {item?.description}
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
