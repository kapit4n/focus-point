import axios from 'axios'

export function ItemService() {

  const url = 'http://localhost:8000/items/' 

  return ({
    getAll: () => {
      return axios.get(url)
    },
    getById: (id) => {},
    create: (item) => {

    },
    update: (item) => {
      return axios.put(url + item.id + "/", item)
    }
  })
}