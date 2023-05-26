import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul>
      <Link to="/">
        <li> Home </li>
      </Link>
      <Link to="/about">
        <li> About </li>
      </Link>
    </ul>
  </nav>
)

export default withRouter(Header)
