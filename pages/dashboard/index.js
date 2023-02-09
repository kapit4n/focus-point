import SecondaryItem from '../../components/secondaryItem'
import Primaryitem from '../../components/primaryItem'

import styles from '../../styles/pages/dashboard.module.css'

export default function () {
  return (
    <div>
      <Primaryitem />
      <div className={styles.secondaryItemsContent}>
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
      </div>
    </div>
  )
}