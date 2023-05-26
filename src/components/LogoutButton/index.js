import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogoutClick = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="btn-cont">
      <button type="button" onClick={onLogoutClick}>
        {' '}
        Logout{' '}
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
