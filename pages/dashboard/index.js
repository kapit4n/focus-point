import SecondaryItem from '../../components/secondaryItem'
import Primaryitem from '../../components/primaryItem'
import History from '../../components/history'

import styles from '../../styles/pages/dashboard.module.css'

export default function () {
  return (
    <div>
      <Primaryitem />
      <div className={styles.secondaryItemsContent}>
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
        <SecondaryItem />
      </div>
      <History />
    </div>
  )
}