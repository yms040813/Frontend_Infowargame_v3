import { useState } from 'react'
import CtfContext from '../context/CtfContext'

const CtfProviders = ({children}) => {
  const [problems, setProblems] = useState([
    {
      id: "ctf-1",
      title: "버퍼 오버플로우 1",
      score: 10
    },
    {
      id: "ctf-2",
      title: "버퍼 오버플로우 2",
      score: 20
    },
    {
      id: "ctf-3",
      title: "버퍼 오버플로우 3",
      score: 30
    },
    {
      id: "ctf-4",
      title: "버퍼 오버플로우 4",
      score: 40
    },
    {
      id: "ctf-5",
      title: "버퍼 오버플로우 5",
      score: 50
    },
    {
      id: "ctf-6",
      title: "버퍼 오버플로우 6",
      score: 60
    },
  ])

  return (<CtfContext.Provider value={{problems}}>
    {children}
  </CtfContext.Provider>)
}

export default CtfProviders