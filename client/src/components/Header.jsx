import { NavLink } from 'react-router-dom'
function Header () {
    return(
        <header className='flex justify-between m-3'>
            <h1 className='text-2xl'>Thomas Stranick - Portfolio</h1>
            <nav className='text-xl'>
                <NavLink to="/">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header