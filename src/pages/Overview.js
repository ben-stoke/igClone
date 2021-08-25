import { Link } from "react-router-dom";

const Overview = ({data, images}) => {
  const { Loading } = data;
  

  console.log(images);

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
                    {images.map((e,key) => (
                    <li className="border bottom mrg-btm-10" key={key}>
                      <div className="pdd-vertical-10">
                        <span className="thumb-img bg-success">
                          <span className="text-white">JW</span>
                        </span>
                        <div className="info">
                          <Link to="#" className="text-link">
                            <span className="title">
                              <b className="font-size-15">{e.author}</b>
                            </span>
                          </Link>
                          <span className="sub-title">5 mins ago</span>
                        </div>
                        <div className="mrg-top-15">
                          <p>
                            {e.description}
                          </p>
                        </div>
                        <div className="mrg-top-15 m-auto">
                          <img
                          className=""
                            src={`https://ipfs.infura.io/ipfs/${e.hash}`}
                            width={117}
                            height={117}
                            alt="man"
                          />
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
                    ))
                    }


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
