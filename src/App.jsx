
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/Headers/Headers'

function App() {
//  bookmark section 
 const [bookmarks, setBookMarks] =useState([]);
 const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookMarks(newBookmarks);
 }

 // reding time
 const [redingTime, setRedingTime] = useState(0) 
const handleMarkAsRead = time => {
  const newReadingTime = redingTime + time;
  setRedingTime(newReadingTime);
}
  return (
    <>
      
      <Headers></Headers>
      <div className='md: flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} 
      ></Blogs>
      <Bookmarks 
       redingTime ={redingTime}
       bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
