import React, { useEffect, useState } from 'react'
import useCustomHooks from './customHooks'
function Comp1() {
  const [data, setData] = useState('Log Out')

  // const useChange=()=>{
  // setData("LogIn");

  // }
  const useMe = () => {
    const mulValue = useCustomHooks(5)
    useEffect(() => {
      setData('Logged In')
    }, []);
    return mulValue;
  } // const mulValue=useCustomHooks(5);
  return (
    <div>
      <h1 className="hai">Hooks</h1>
      <h3>{data}</h3>
      <h1>{useMe}</h1>
    </div>
  )
}
export default Comp1
