import { NavLink } from 'react-router-dom'

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
]

export function Navbar() {
  return (
    <nav className="flex gap-x-3 px-4 py-2">
      {links.map(link => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => {
            return isActive ? 'text-black underline' : 'text-gray-500'
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
