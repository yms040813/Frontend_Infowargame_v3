import { useState } from 'react'
import NoticeContext from '../context/NoticeContext'


const NoticeProviders = ({children}) => {
	const date = new Date();
	const [Notices, setNotices] = useState([
	  {
	    id: 1,
	    title: "버퍼 오버플로우 1",
	    time: date.getMinutes()
	  },
	  { id: 2,
	    title: "버퍼 오버플로우 1",
	    time: date.getHours()
	  },
	  { id: 3,
	    title: "버퍼 오버플로우 1",
	    time: date.getHours()
	  },
	  { id: 4,
	    title: "버퍼 오버플로우 1",
	    time: date.getHours()
	  },
	  { id: 5,
	    title: "버퍼 오버플로우 1",
	    time: date.getHours()
	  },
	  { id: 6,
	    title: "버퍼 오버플로우 1",
	    time: date.getHours()
	  },
	])

	return (<NoticeContext.Provider value={{Notices}}>
		{children}
	      </NoticeContext.Provider>)
}

      
export default NoticeProviders