import MenuBoxContext from '../context/MBarContext'
import { useState } from 'react'

const MBarProviders = ({children}) => {
  const [ctfScroll, setCtfScroll] = useState(true)

  const changeFalse = () => { setCtfScroll(false) }

  const changeScroll = () => { setCtfScroll(!ctfScroll) }
  
  return (<MenuBoxContext.Provider value={{ctfScroll, changeFalse, changeScroll}}>
    {children}
  </MenuBoxContext.Provider>)
}

export default MBarProviders