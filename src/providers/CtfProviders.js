import { useState } from 'react'
import CtfContext from '../context/CtfContext'

const CtfProviders = ({children}) => {
  const [problems, setProblems] = useState([
    {
      id: '1',
      title: "버퍼 오버플로우 1",
      score: 10
    },
    {
      id: '2',
      title: "버퍼 오버플로우 2",
      score: 20
    },
    {
      id: '3',
      title: "버퍼 오버플로우 3",
      score: 30
    },
    {
      id: '4',
      title: "버퍼 오버플로우 4",
      score: 40
    },
    {
      id: '5',
      title: "버퍼 오버플로우 5",
      score: 50
    },
    {
      id: '6',
      title: "버퍼 오버플로우 6",
      score: 60
    },
  ])

  const [problemDetails, setProblemDetails] = useState([
    {
      id: '1',
      title: "버퍼 오버플로우 1",
      context: "영주는 치즈1를 싫어해 영주는 치즈1를 싫어해 영주는 치즈1를 싫어해 영주는 치즈1를 싫어해 영주는 치즈1를 싫어해 영주는 치즈1를 싫어해",
      frag : '123456'
    },
    {
      id: '2',
      title: "버퍼 오버플로우 2",
      context: "영주는 치즈2를 싫어해 영주는 치즈2를 싫어해 영주는 치즈2를 싫어해 영주는 치즈2를 싫어해 영주는 치즈2를 싫어해 영주는 치즈2를 싫어해",
      frag : '123456'
    },
    {
      id: '3',
      title: "버퍼 오버플로우 3",
      context: "영주는 치즈3를 싫어해 영주는 치즈3를 싫어해 영주는 치즈3를 싫어해 영주는 치즈3를 싫어해 영주는 치즈3를 싫어해 영주는 치즈3를 싫어해",
      frag : '123456'
    },
    {
      id: '4',
      title: "버퍼 오버플로우 4",
      context: "영주는 치즈4를 싫어해 영주는 치즈4를 싫어해 영주는 치즈4를 싫어해 영주는 치즈4를 싫어해 영주는 치즈4를 싫어해 영주는 치즈4를 싫어해",
      frag : '123456'
    },
    {
      id: '5',
      title: "버퍼 오버플로우 5",
      context: "영주는 치즈5를 싫어해 영주는 치즈5를 싫어해 영주는 치즈5를 싫어해 영주는 치즈5를 싫어해 영주는 치즈5를 싫어해 영주는 치즈5를 싫어해",
      frag : '123456'
    },
    {
      id: '6',
      title: "버퍼 오버플로우 6",
      context: "영주는 치즈6를 싫어해 영주는 치즈6를 싫어해 영주는 치즈6를 싫어해 영주는 치즈6를 싫어해 영주는 치즈6를 싫어해 영주는 치즈6를 싫어해",
      frag : '123456'
    }
  ])

  return (<CtfContext.Provider value={{problems, problemDetails}}>
    {children}
  </CtfContext.Provider>)
}

export default CtfProviders