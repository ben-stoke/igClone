import { Link } from "react-router-dom";

const Overview = (data) => {
  const { Loading } = data.data;

  

  // console.log(data);

  return (
    <div className="main-content">
      {Loading && <h4 className="text-center">Loading...</h4>}
      {!Loading && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-block">
                  <div className="inline-block">
                    <h1 className="no-mrg-vertical">9k</h1>
                    <p>All Posts</p>
                  </div>
                  <div className="pdd-top-25 inline-block pull-right">
                    <span className="label label-success label-lg mrg-left-5">
                      +18%
                    </span>
                  </div>
                  <div className="mrg-top-25">
                    <div id="bar-config" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-block">
                  <div className="inline-block">
                    <h1 className="no-mrg-vertical">500</h1>
                    <p>My Posts</p>
                  </div>
                  <div className="pdd-top-25 inline-block pull-right">
                    <span className="label label-warning label-lg mrg-left-5">
                      +18%
                    </span>
                  </div>
                  <div className="mrg-top-25">
                    <div id="bar-config" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 m-auto">
              <div className="card">
                <div className="card-heading border bottom">
                  <h4 className="card-title">News Feed</h4>
                </div>
                <div className="widget-feed">
                  <ul
                    className="list-info overflow-y-auto relative scrollable"
                    style={{ maxHeight: 340 }}
                  >
                    <li className="border bottom mrg-btm-10">
                      <div className="pdd-vertical-10">
                        <span className="thumb-img bg-primary">
                          <span className="text-white">JH</span>
                        </span>
                        <div className="info">
                          <Link to="#" className="text-link">
                            <span className="title">
                              <b className="font-size-15">Jordan Hurst</b>
                            </span>
                          </Link>
                          <span className="sub-title">5 mins ago</span>
                        </div>
                        <div className="mrg-top-10">
                          <p className="no-mrg-btm">
                            Remember, a Jedi can feel the Force flowing through
                            him. You mean it controls your actions? Partially.
                          </p>
                        </div>
                        <ul className="feed-action">
                          <li>
                            <Link to="#">
                              <i className="ti-heart text-danger pdd-right-5" />
                              <span>168</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-comments text-primary pdd-right-5" />
                              <span>18</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="border bottom mrg-btm-10">
                      <div className="pdd-vertical-10">
                        <span className="thumb-img bg-success">
                          <span className="text-white">JW</span>
                        </span>
                        <div className="info">
                          <Link to="#" className="text-link">
                            <span className="title">
                              <b className="font-size-15">Jennifer Watkins</b>
                            </span>
                          </Link>
                          <span className="sub-title">5 mins ago</span>
                        </div>
                        <div className="mrg-top-15">
                          <p>
                            What good's a reward if you ain't around to use it?
                          </p>
                        </div>
                        <ul className="feed-action">
                          <li>
                            <Link to="#">
                              <i className="ti-heart text-danger pdd-right-5" />
                              <span>168</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-comments text-primary pdd-right-5" />
                              <span>18</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="border bottom">
                      <div className="pdd-vertical-10">
                        <span className="thumb-img bg-warning">
                          <span className="text-white">MB</span>
                        </span>
                        <div className="info">
                          <Link to="#" className="text-link">
                            <span className="title">
                              <b className="font-size-15">Michael Birch</b>
                            </span>
                          </Link>
                          <span className="sub-title">5 mins ago</span>
                        </div>
                        <div className="mrg-top-15">
                          <p>
                            What good's a reward if you ain't around to use it?
                            Besides, attacking that battle station ain't my idea
                            of courage.
                          </p>
                        </div>
                        <ul className="feed-action">
                          <li>
                            <Link to="#">
                              <i className="ti-heart text-danger pdd-right-5" />
                              <span>168</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="ti-comments text-primary pdd-right-5" />
                              <span>18</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
