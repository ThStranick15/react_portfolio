import { NavLink } from 'react-router-dom'
function Header () {
    return(
        <header className='flex flex-col md:flex-row justify-between m-3 bg-slate-500 rounded p-3 text-white'>
            <h1 className='text-3xl'>Thomas Stranick - Portfolio</h1>
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