import { NavLink } from 'react-router-dom';

function MenuLink({ children, to, className }) {
  return (
    <NavLink className={`text-white px-2 py-3 inline-block ${className}`} to={to}>
      {children}
    </NavLink>
  );
}

export default MenuLink;