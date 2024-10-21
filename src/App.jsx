
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/Headers/Headers'

function App() {
 
 const [bookmarks, setBookMarks] =useState([]);
 const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookMarks(newBookmarks);
 }

  return (
    <>
      
      <Headers></Headers>
      <div className='md: flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
