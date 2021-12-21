import { useState } from 'react'
import NoticeContext from '../context/NoticeContext'
import moment from 'moment';

const NoticeProviders = ({children}) => {
	const nowTime = moment().format('YYYY-MM-DD | HH:mm');
	const [Notices, setNotices] = useState([
	  {
	    id: 1,
	    title: "버퍼 오버플로우 1",
	    time: nowTime
	  },
	  { id: 2,
	    title: "버퍼 오버플로우 2",
	    time: nowTime
	  },
	  { id: 3,
	    title: "버퍼 오버플로우 3",
	    time: nowTime
	  },
	  { id: 4,
	    title: "버퍼 오버플로우 4",
	    time: nowTime
	  },
	  { id: 5,
	    title: "버퍼 오버플로우 5",
	    time: nowTime
	  },
	  { id: 6,
	    title: "버퍼 오버플로우 6",
	    time: nowTime
	  },
	])

	return (<NoticeContext.Provider value={{Notices}}>
		{children}
	      </NoticeContext.Provider>)
}

      
export default NoticeProviders