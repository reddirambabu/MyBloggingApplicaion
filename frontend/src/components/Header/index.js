import React from "react"
import { Link } from "react-router-dom"
import "./index.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"


export const Header = () => {
 
  return (
    <>
      <header className='header active'>
        <div className='scontainer flex'>
          <Link to="/" >
            <div className='logo'>
            <h1>MyBlog</h1>
          </div>
          </Link>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div >
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
