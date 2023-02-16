import React from 'react'

import SecondaryItem from '../../components/secondaryItem'
import Primaryitem from '../../components/primaryItem'
import History from '../../components/history'

import styles from '../../styles/pages/dashboard.module.css'
import {ItemService} from '../services/ItemsService'

export default function () {

  const [items, setItems] = React.useState([])
  const [mainItem, setMainItem] = React.useState({})

  React.useEffect(() => {
    ItemService().getAll().then(resp => {
      console.log(resp.data)
      setItems(resp.data)
    })
  }, [])

  React.useEffect(() => {
    ItemService().getAll().then(resp => {
      console.log(resp.data)
      setMainItem(resp.data.shift())
    })
  }, [])



  const updateItem = async (item) => {
    ItemService.update(item).then(resp => {
      console.log(resp)
    })
  }

  const focus = item => {
    update({...item, focus: true}).then(console.log)
  }

  const unFocus = item => {
    if (item) {
      update({...item, focus: false}).then(console.log)
    }
  }

  return (
    <div>
      <Primaryitem item={mainItem}/>
      <div className={styles.secondaryItemsContent}>
        {items.map(item => <SecondaryItem item={item} focus={() => {
          focus(item)
          unFocus(mainItem)
        }}/> )}
      </div>
      <History />
    </div>
  )
}