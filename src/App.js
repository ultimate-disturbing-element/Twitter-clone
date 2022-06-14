import React from 'react'
import { Sidebar,Feed,Widgets} from './Components/index'
import './App.css'
const App = () => {
  return (
    <div className='app'>
      {/* SideBar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>
    </div>
  )
}

export default App
