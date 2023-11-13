import Breadcrumbs from '../Components/Breadcrumbs'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header>
            <nav>
                {/* a navlink has a class attribute which can easily
                be styled unlink link
                <NavLink to='/about' >About</NavLink>
                <Link to='/about' >About</Link> */}
                <h2>Router in depth</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='career'>Check Devs</NavLink>
            </nav>
            <Breadcrumbs />
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout