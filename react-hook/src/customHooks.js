
import { useEffect, useState } from 'react'
const useCustomHooks = (dataInfo) => {
  const [data, setData] = useState(dataInfo)
  useEffect(() => {
    setData(data * 5)
  }, [data])
  return data
}
export default useCustomHooks
