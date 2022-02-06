import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'
import logo from './react.png'
import { useGlobalContext } from './Context'
const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  return (
    <>
      <aside className={`${isSidebarOpen?`sidebar show-sidebar`:`sidebar`}`}>
        <div className="sidebar-header">
          <img className="logo" src={logo} alt="" />
          <button className="close-btn" onClick={()=>setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
