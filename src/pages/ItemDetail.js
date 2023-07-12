import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAllItems } from '../services/fetchApi'

const ItemDetail = () => {
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetchAllItems()
  }, [])

  return (
    <>
      <h1>hello worlds</h1>
    </>
  )
}

export default ItemDetail
