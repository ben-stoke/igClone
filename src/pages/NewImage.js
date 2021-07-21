import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import lib from "../config/lib";

const NewImage = (data) => {
  const { Loading } = data.data;
  const [CaptureFile, setCaptureFile] = useState(null);

  console.log(data);

  return (
    <div className="main-content">
      {Loading && <h4 className="text-center">Loading...</h4>}
      {!Loading && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-heading border bottom">
                  <h4 className="card-title">General Info</h4>
                </div>
                <div className="card-block">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="mrg-top-10 text-dark">
                        {" "}
                        <b>Avatar</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="img-upload" className="pointer">
                          <img
                            src="assets/images/others/img-10.jpg"
                            width={117}
                            alt
                          />
                          <span className="btn btn-default display-block no-mrg-btm">
                            Choose file
                          </span>
                          <input
                            className="d-none"
                            type="file"
                            name="uploadedimages0"
                            id="img-upload"
                            accept=".jpg, .jpeg, .png, .bmp, .gif" 
                            onChange={setCaptureFile}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block btn-lg"
                      >
                        Upload!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewImage;
