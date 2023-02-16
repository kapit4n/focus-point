import React from 'react'

import SecondaryItem from '../../components/secondaryItem'
import Primaryitem from '../../components/primaryItem'
import History from '../../components/history'

import styles from '../../styles/pages/dashboard.module.css'
import {ItemService} from '../services/ItemsService'

export default function () {

  const [items, setItems] = React.useState([])
  const [mainItem, setMainItem] = React.useState({})
  const [reloadOneMoreTime, setReloadOneMoreTime] = React.useState(0)

  React.useEffect(() => {
    ItemService().getAll().then(resp => {
      console.log(resp.data)
      setItems(resp.data.filter(i => !i.focus))
    })
  }, [mainItem])

  React.useEffect(() => {
    ItemService().getAll().then(resp => {
      console.log(resp.data)
      setMainItem(resp.data.filter(i => i.focus).shift())
    })
  }, [reloadOneMoreTime])

  const updateItem = async (item) => {
    return ItemService().update(item)
  }

  const onFocusItem = async (item, mainItem) => {
    await updateItem({...item, focus: true})
    if (mainItem) {
      await updateItem({...mainItem, focus: false})
    }
    setMainItem(item)
  }

  const unFocus = item => {
    if (item) {
      updateItem({...item, focus: false})
      setReloadOneMoreTime(reloadOneMoreTime + 1)
    }
  }

  return (
    <div>
      <Primaryitem item={mainItem} onUnFocus={() => unFocus(mainItem)}/>
      <div className={styles.secondaryItemsContent}>
        {items.map(item => <SecondaryItem key={item.id} item={item} onFocus={() => onFocusItem(item, mainItem)}/> )}
      </div>
      <History />
    </div>
  )
}