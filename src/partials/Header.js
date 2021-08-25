import { useState } from "react";
import { Link } from "react-router-dom";
import lib from "../config/lib";
// import $ from 'jquery';

const Header = (e) => {
  const { sideNavToggle } = e.data;
  let data = e.data;
  // console.log(data);

  return (
    <div className="header navbar">
      <div className="header-container">
        <ul className="nav-left">
          <li>
            <Link className={sideNavToggle} >
              <i className="ti-view-grid" />
            </Link>
          </li>
          <li className="search-box d-none d-md-block">
            <Link className="search-toggle no-pdd-right">{data.AcctAuth}</Link>
          </li>
          <li className="search-input">
            <div className="advanced-search">
              <div className="search-wrapper">
                <div className="pdd-vertical-10">
                  <span className="display-block mrg-vertical-5 pdd-horizon-20 text-gray">
                    <i className="ti-user pdd-right-5" />
                    <span>People</span>
                  </span>
                  <ul className="list-unstyled list-info">
                    <li>
                      <Link to="#">
                        <img
                          alt=""
                          className="thumb-img"
                          src="assets/images/avatars/thumb-1.jpg"
                        />
                        <div className="info">
                          <span className="title">Jordan Hurst</span>
                          <span className="sub-title">
                            <i className="ti-location-pin" />
                            <span>44 Shirley Ave. West Chicago</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          alt=""
                          className="thumb-img"
                          src="assets/images/avatars/thumb-5.jpg"
                        />
                        <div className="info">
                          <span className="title">Jennifer Watkins</span>
                          <span className="sub-title">
                            <i className="ti-location-pin" />
                            <span>514 S. Magnolia St. Orlando</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          alt=""
                          className="thumb-img"
                          src="assets/images/avatars/thumb-4.jpg"
                        />
                        <div className="info">
                          <span className="title">Michael Birch</span>
                          <span className="sub-title">
                            <i className="ti-location-pin" />
                            <span>70 Bowman St. South Windsor</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mrg-horizon-20 border top" />
                <div className="pdd-vertical-10">
                  <span className="display-block mrg-vertical-5 pdd-horizon-20 text-gray">
                    <i className="ti-rss pdd-right-5" />
                    <span>Post</span>
                  </span>
                  <ul className="list-unstyled list-info">
                    <li>
                      <Link to="#">
                        <img
                          alt=""
                          className="thumb-img"
                          src="assets/images/img-1.jpg"
                        />
                        <div className="info">
                          <span className="title">
                            Artoo expresses his relief
                          </span>
                          <span className="sub-title">
                            <span>Oh, thank goodness we're coming out...</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          alt=""
                          className="thumb-img"
                          src="assets/images/img-2.jpg"
                        />
                        <div className="info">
                          <span className="title">Ready for some power?</span>
                          <span className="sub-title">
                            <span>Lord Vader. You may take Caption So...</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-footer">
                <span>
                  You are Searching for '
                  <b className="text-dark">
                    <span className="serach-text-bind" />
                  </b>
                  '
                </span>
              </div>
            </div>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="user-profile dropdown">
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              <img
                alt=""
                className="profile-img img-fluid"
                src="assets/images/user.jpg"
              />
              <div className="user-info">
                <span className="name pdd-right-5">Nate Leong</span>
                <i className="ti-angle-down font-size-10" />
              </div>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="#">
                  <i className="ti-settings pdd-right-10" />
                  <span>Setting</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-user pdd-right-10" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-email pdd-right-10" />
                  <span>Inbox</span>
                </Link>
              </li>
              <li role="separator" className="divider" />
              <li>
                <Link to="#">
                  <i className="ti-power-off pdd-right-10" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="notifications dropdown">
            <span className="counter">2</span>
            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="ti-bell" />
            </Link>
            <ul className="dropdown-menu ">
              <li className="notice-header">
                <i className="ti-bell pdd-right-10" />
                <span>Notifications</span>
              </li>
              <li>
                <ul className="list-info overflow-y-auto relative scrollable">
                  <li>
                    <Link to="#">
                      <img
                        alt=""
                        className="thumb-img"
                        src="assets/images/avatars/thumb-5.jpg"
                      />
                      <div className="info">
                        <span className="title">
                          <span className="font-size-14 text-semibold">
                            Jennifer Watkins
                          </span>
                          <span className="text-gray">
                            commented on your{" "}
                            <span className="text-dark">post</span>
                          </span>
                        </span>
                        <span className="sub-title">5 mins ago</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        alt=""
                        className="thumb-img"
                        src="assets/images/avatars/thumb-4.jpg"
                      />
                      <div className="info">
                        <span className="title">
                          <span className="font-size-14 text-semibold">
                            Samuel Field
                          </span>
                          <span className="text-gray">
                            likes your <span className="text-dark">photo</span>
                          </span>
                        </span>
                        <span className="sub-title">8 hours ago</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="thumb-img bg-primary">
                        <span className="text-white">M</span>
                      </span>
                      <div className="info">
                        <span className="title">
                          <span className="font-size-14 text-semibold">
                            Michael Birch
                          </span>
                          <span className="text-gray">
                            likes your <span className="text-dark">photo</span>
                          </span>
                        </span>
                        <span className="sub-title">5 hours ago</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="thumb-img bg-success">
                        <span className="text-white">
                          <i className="fa fa-paper-plane-o" />
                        </span>
                      </span>
                      <div className="info">
                        <span className="title">
                          <span className="font-size-14 text-semibold">
                            Message sent
                          </span>
                        </span>
                        <span className="sub-title">8 hours ago</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="thumb-img bg-info">
                        <span className="text-white">
                          <i className="ti-user" />
                        </span>
                      </span>
                      <div className="info">
                        <span className="title">
                          <span className="font-size-14 text-semibold">
                            Admin
                          </span>
                          <span className="text-gray">Welcome on board</span>
                        </span>
                        <span className="sub-title">8 hours ago</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="notice-footer">
                <span>
                  <Link to="#" className="text-gray">
                    Check all notifications{" "}
                    <i className="ei-right-chevron pdd-left-5 font-size-10" />
                  </Link>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <Link className="side-panel-toggle" to="#">
              <i className="ti-align-right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
