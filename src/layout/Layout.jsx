import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <header>
            <ul>
                <li>
                    <Link to={'/home'} >oiy</Link>
                </li>
                <li>
                    <Link to={'/app'} >oiy</Link>
                </li>
            </ul>
        </header>

        <article>
            <aside>
                Side bar
            </aside>
            <main>
                <Outlet />
            </main>
        </article>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default Layout