import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  // faSuitcase,
  // faBars,
  // faClose,
} from '@fortawesome/free-solid-svg-icons'

// import {
//   faLinkedin,
//   faGithub,
//   faYoutube,
//   faSkype,
// } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    {/* <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link> */}
    <nav className="text-center">
      <NavLink exact="true" activeclassname="active" to="/">
        {/* <FontAwesomeIcon icon={faHome} color="#4d4d4e" size="lg" /> */}
        home
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" size="lg" /> */}
        what we do
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/analyze"
      >
        {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" size="lg" /> */}
        analyze
      </NavLink>
    </nav>
    {/* <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/krishaashahh/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="skype:live:.cid.e643428c50f5d2e3"
        >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </a>
      </li>
    </ul> */}
  </div>
)

export default Sidebar
