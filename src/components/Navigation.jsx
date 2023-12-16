// import { Link } from 'react-router-dom'
// import './navigation.scss'

// export default function Navigation() {
//   return (
//     <div className='navigation-container'>
//       <ul>
//         <li><Link className='link' to="/">Home</Link></li>
//         <li><Link className='link' to="/auth/login">Login</Link></li>
//         <li><Link className='link' to="/auth/register">Register</Link></li>
//         <li><Link className='link' to="/explores">Explores</Link></li>
//         <li><Link className='link' to="/merchants">Merchants</Link></li>
//         <li><Link className='link' to="/merchants/123">Merchants Detail</Link></li>
//         <li><Link className='link' to="/products">Products</Link></li>
//         <li><Link className='link' to="/products/123">Products Detail</Link></li>
//         <li><Link className='link' to="/users/123">User</Link></li>
//       </ul>
//     </div>
//   )
// }

import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explores">Explore</Link>
        </li>
      </ul>
    </nav>
  );
}
