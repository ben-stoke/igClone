import Web3 from "web3";

const lib = {
  PORT: "http://localhost:3200",
  fetchMetadata: (data) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // mode: "no-cors", // not advised, just to disable cors validation
    };
  },

  preventDefault: (e) => {
    e.preventDefault();
    console.log("prevented default!");
  },

  loadWeb3: async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non Ethereum Browser detected! Consider using Metamask.");
    }
  },

  loadAccounts: async () => {
    const web3 = window.web3;
    // loads all accounts in current metamask network into our project
    const accounts = await web3.eth.getAccounts();
    return accounts;
  },

  // Function that updates the app state when Metamask account status is changed
  listenForMetamaskAuth: () => {
    setInterval(() => {
      window.ethereum.on("accountsChanged", function (accounts) {
        return accounts[0];
      });
    }, 1000);
  },

  loadContract: async (contract) => {
    
    // return new Promise(async function (resolve, reject) {
      
      let web3 = window.web3;
      // Get information about the current network.
      const networkId = await web3.eth.net.getId();
      const data = contract.networks[networkId];
      if (data) {
        const _contract = new web3.eth.Contract(contract.abi, data.address);
        // resolve(_contract)
        return _contract;
      } else {
        // return "DaiToken contract not deployed to detected network!";
        window.alert("DaiToken contract not deployed to detected network!");
        // reject("DaiToken contract not deployed to detected network!");
      }

    // })
  },
  // captureFile : e => {

  //   e.preventDefault()
  //   const file = e.target.files[0]
  //   const reader = new window.FileReader()
  //   reader.readAsArrayBuffer(file)

  //   reader.onloadend = () => {
  //     this.setState({ buffer: Buffer(reader.result) })
  //     console.log('buffer', this.state.buffer)
  //   }
  // }

};

export default lib;
