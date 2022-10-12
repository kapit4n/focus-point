
import styles from '../../styles/circle.module.css'

export default function () {
  return (
    <div className={styles.container}>
      <svg height="500" width="500">
        <circle cx="200" cy="200" r="200" stroke="black" stroke-width="3" fill="white" />
        <circle cx="200" cy="200" r="100" stroke="black" stroke-width="3" fill="white" />
        <circle cx="200" cy="200" r="50" stroke="black" stroke-width="3" fill="white" />
        <circle cx="200" cy="200" r="10" stroke="black" stroke-width="3" fill="white" />
        <circle cx="200" cy="200" r="2" stroke="black" stroke-width="3" fill="white" />
      </svg>
    </div>
  )
}
