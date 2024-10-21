
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/Headers/Headers'

function App() {
 

  return (
    <>
      
      <Headers></Headers>
      <div className='md: flex '>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
