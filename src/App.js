import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Web3 from "web3";
import Decentragram from "./abis/Decentragram.json";
import { useState, useEffect, useCallback } from "react";
import lib from "./config/lib";
import Header from "./partials/Header";
import SideNav from "./partials/SideNav";
import SidePanel from "./partials/SidePanel";
import Footer from "./partials/Footer";
import Overview from "./pages/Overview";
import NewImage from "./pages/NewImage";

function App() {
  const [AcctAuth, setAcctAuth] = useState(null);
  const [decentragram, setDecentragram] = useState(null);
  const [ImagesCount, setImagesCount] = useState([]);
  const [Images, setImages] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [sideNavToggle, setsideNavToggle] = useState("side-nav-toggle");
  const data = {
    AcctAuth,
    Loading,
    sideNavToggle,
    decentragram
  };

  useEffect(async () => {
    await lib.loadWeb3();
    await loadBlockchainData();
    // setsideNavToggle("null");
  }, [AcctAuth]);

  

  async function loadBlockchainData() {
    const web3 = window.web3;

    // Load account
    const accounts = await web3.eth.getAccounts();
    setAcctAuth(accounts[0]);

    // Network ID
    const networkId = await web3.eth.net.getId();
    const networkData = Decentragram.networks[networkId];

    if (!networkData) {
      window.alert("Decentragram contract not deployed to detected network.");
    }
    // FETCH THE CONTRACT
    const _decentragram = new web3.eth.Contract(
      Decentragram.abi,
      networkData.address
    );
    setDecentragram(_decentragram);

    const imagesCount = await _decentragram.methods.imageCount().call();
    setImagesCount(imagesCount);
    
      // Load images
      for (var i = 0; i < imagesCount; i++) {
        let image = await _decentragram.methods.images(i).call()
        
        setImages(Images.push(image))
      }
      console.log(Images)
    if(accounts && _decentragram && imagesCount){
      setLoading(false);
    }
  }

  // loads all accounts in current metamask network into our project
  async function loadAccounts() {
    let web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAcctAuth(accounts[0]);
  }

  // listen for change in loggedin Metamask accounts
  window.ethereum.on("accountsChanged", function (accounts) {
    setAcctAuth(accounts[0]);
  });

  

  return (
    <Router>
      <div className="app">
        <div className="layout">
          <SideNav />
          <div className="page-container">
            <Header data={data} />
            <SidePanel />
            <Switch>
              <Route exact path="/">
                <Overview data={data} />
              </Route>
              <Route exact path="/new-image">
                <NewImage data={data} onLoading={setLoading} />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
