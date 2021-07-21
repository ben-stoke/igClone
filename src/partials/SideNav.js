import { Link } from "react-router-dom";
// import lib from "../config/lib";
const SideNav = () => {


    return ( 
       <div className="side-nav">
  <div className="side-nav-inner">
    <div className="side-nav-logo">
      <Link to="/">
        <div className="logo logo-dark" style={{backgroundImage: 'url("assets/images/logo/logo.png")'}}>
        </div>
        <div className="logo logo-white" style={{backgroundImage: 'url("assets/images/logo/logo-white.png")'}} />
      </Link>
      <div className="mobile-toggle side-nav-toggle">
        <Link to="#">
          <i className="ti-arrow-circle-left" />
        </Link>
      </div>
    </div>
    <ul className="side-nav-menu scrollable">
      <li className="nav-item active">
        <Link className="mrg-top-30" to="/">
          <span className="icon-holder">
            <i className="ti-home" />
          </span>
          <span className="title">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="" to="/new-image">
          <span className="icon-holder">
            <i className="ti-home" />
          </span>
          <span className="title">Image</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-package" />
          </span>
          <span className="title">Apps</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="email.html">Email</Link>
          </li>
          <li>
            <Link to="calendar.html">Calendar</Link>
          </li>
          <li>
            <Link to="social.html">Social</Link>
          </li>
          <li>
            <Link to="task.html">Task</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-palette" />
          </span>
          <span className="title">UI Elements</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="cards.html">Cards</Link>
          </li>
          <li>
            <Link to="buttons.html">Buttons</Link>
          </li>
          <li>
            <Link to="modals.html">Modals</Link>
          </li>
          <li>
            <Link to="tabs.html">Tabs &amp; Accordions</Link>
          </li>
          <li>
            <Link to="progress-slider.html">Progress &amp; Slider</Link>
          </li>
          <li>
            <Link to="notification.html">Notification</Link>
          </li>
          <li>
            <Link to="typography.html">Typography</Link>
          </li>
          <li>
            <Link to="icons.html">Icons</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-file" />
          </span>
          <span className="title">Forms</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="form-elements.html">Form Elements</Link>
          </li>
          <li>
            <Link to="form-layouts.html">Form Layouts</Link>
          </li>
          <li>
            <Link to="form-wizard.html">Form Wizard</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-layout-media-overlay" />
          </span>
          <span className="title">Tables</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="basic-table.html">Basic Table</Link>
          </li>
          <li>
            <Link to="data-table.html">Data Table</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-pie-chart" />
          </span>
          <span className="title">Charts</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="nvd3.html">Nvd3</Link>
          </li>
          <li>
            <Link to="chartjs.html">ChartJs</Link>
          </li>
          <li>
            <Link to="sparkline.html">Sparkline</Link>
          </li>
          <li>
            <Link to="rickshaw.html">Ricksaw</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-map-alt" />
          </span>
          <span className="title">Map</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="google-map.html">Google Map</Link>
          </li>
          <li>
            <Link to="vector-map.html">Vector Map</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-cloud" />
          </span>
          <span className="title">Extra</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="invoice.html">Invoice</Link>
          </li>
          <li>
            <Link to="account.html">Account Settings</Link>
          </li>
          <li>
            <Link to="faq.html">FAQ</Link>
          </li>
          <li>
            <Link to="gallery.html">Gallery</Link>
          </li>
          <li>
            <Link to="sign-in.html">Sign In</Link>
          </li>
          <li>
            <Link to="sign-in2.html">Sign In 2</Link>
          </li>
          <li>
            <Link to="sign-up.html">Sign Up</Link>
          </li>
          <li>
            <Link to="404.html">404</Link>
          </li>
          <li>
            <Link to="500.html">500</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-toggle" to="">
          <span className="icon-holder">
            <i className="ti-view-list-alt" />
          </span>
          <span className="title">Multiple Levels</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </Link>
        <ul className="dropdown-menu">
          <li className="nav-item dropdown">
            <Link to="">
              <span>Level 1.2</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="">
              <span>Level 1.1</span>
              <span className="arrow">
                <i className="ti-angle-right" />
              </span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="">Level 2</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

     );
}
 
export default SideNav;