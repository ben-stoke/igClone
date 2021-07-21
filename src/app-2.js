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

function App() {
  const [AcctAuth, setAcctAuth] = useState(null);
  const [decentragram, setDecentragram] = useState(null);
  const [ImagesCount, setImagesCount] = useState([]);
  const [Loading, setLoading] = useState(true);
  let effectDependencies = { key1: decentragram, key2: ImagesCount };
  const data = {
    AcctAuth,
    Loading,
  };





  const loadContract = useCallback((contract) => {

    return new Promise(async function (resolve, reject) {
      let web3 = window.web3;
      // Get information about the current network.
      const networkId = await web3.eth.net.getId();
      const data = contract.networks[networkId];
      if (data) {
        const _contract = await new web3.eth.Contract(contract.abi, data.address);
        resolve(_contract)
        // return _contract;
      } else {
        window.alert("DaiToken contract not deployed to detected network!");
      }
    })

  }, []);





  useEffect(async () => {
    // check browser for web3
    await lib.loadWeb3();
    await loadAccounts();
  });

  useEffect(async() => {
    let _decentragram = await loadContract(Decentragram);
    setDecentragram(_decentragram);
    let imagesCount = _decentragram.methods.imageCount.call();
    setImagesCount(imagesCount);
    // console.log(imagesCount)

    if (decentragram) {
      setLoading(false);
    }
  }, [decentragram]);

  // loads all accounts in current metamask network into our project
  async function loadAccounts() {
    let web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAcctAuth(accounts[0]);
  }

  // setInterval(() => {
  window.ethereum.on("accountsChanged", function (accounts) {
    setAcctAuth(accounts[0]);
  });
  // }, 1000);

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
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
