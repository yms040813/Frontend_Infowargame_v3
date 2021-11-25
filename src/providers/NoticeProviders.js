import { useState } from 'react'
import NoticeContext from '../context/NoticeContext'


const NoticeProviders = ({children}) => {
	const [Notices, setNotices] = useState([
	  {
	    id: 1,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	  { id: 2,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	  { id: 3,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	  { id: 4,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	  { id: 5,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	  { id: 6,
	    title: "버퍼 오버플로우 1",
	    time: 10
	  },
	])

	return (<NoticeContext.Provider value={{Notices}}>
		{children}
	      </NoticeContext.Provider>)
}

      
export default NoticeProviders