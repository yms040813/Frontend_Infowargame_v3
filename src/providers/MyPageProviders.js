import MyPageContext from '../context/MyPageContext'
import { useState } from 'react'

const MyPageProviders = ({children}) => {
  const [usersInfo, setUsersInfo] = useState([
    {
      id: 1,
      name: 'JMJ',
      email: 'TestEmail@naver.com'
    }
  ])

  return (<MyPageContext.Provider value={{usersInfo}}>
    {children}
  </MyPageContext.Provider>)
}

export default MyPageProviders