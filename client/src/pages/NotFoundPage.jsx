import {useContext} from 'react'
import {context} from '../context/postContext'

export function NotFoundPage() {

  const appContext = useContext(context);
  console.log(appContext)

  return (
    <div>NotFoundPage</div>
  )
}