import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import lib from "../config/lib";

//DECLARE IPFS
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
}); // leaving out the arguments will default to these values






// STATELESS FUNCTIONAL COMPONENT
const NewImage = ({ data, onLoading }) => {
  const { Loading } = data;
  const decentragram = data.decentragram;
  const AcctAuth = data.AcctAuth;
  
  const [imgBuffer, setimgBuffer] = useState(null);   // image blob is stored here
  const [ImgDesc, setImgDesc] = useState(null);   // description typed in by user

  // console.log(data);
  // setImgDesc




  // GET FILE FROM USER PC
  var captureFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      setimgBuffer(Buffer(reader.result));
      if(imgBuffer == null){
        console.log('Select a valid file...');
      }else{        
        console.log(imgBuffer);
      }
    };
  };




  // UPLOAD TO IPFS
  var uploadImage = async (description) => {
    console.log("Submitting file to ipfs...");

    //ADD FILE TO IPFS
    let res = await ipfs.add(imgBuffer);
    // onLoading(true);
    console.log( res);

    
    let updateImage = decentragram.methods
        .upload_image(res.path, description)
        .send({ from: AcctAuth });

        // TO CHECK IF WRITING TO BLOCKCHAIN IS SUCCESSFULL
        updateImage.on("transactionHash", (hash) => { 
          console.log('Hash saved successfully...')
          console.log(hash)
          // onLoading(false);
        });
        updateImage.once('imageCreated', (err, res) => {
          console.log(res)
        })
  };

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
                        <b>Avatar</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <label htmlFor="img-upload" className="pointer">
                          <img
                            src="assets/images/others/img-10.jpg"
                            width={117}
                            alt="man"
                          />
                          <span className="btn btn-default display-block no-mrg-btm">
                            Choose file
                          </span>
                          <input
                            className="d-none"
                            type="file"
                            // name="uploadedimages0"
                            id="img-upload"
                            accept=".jpg, .jpeg, .png, .bmp, .gif"
                            onChange={captureFile}
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
                          required
                          onChange={(e) => setImgDesc(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        onClick={(e)=> {
                          e.preventDefault();
                          uploadImage(ImgDesc);
                        }}
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
