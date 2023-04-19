import {useState} from 'react'
import NewWalletGenerator from './components/NewWalletGenerator'
import UseWallet from './components/UseWallet'
import Header from './components/Header'


function App() {

  const {ethereum} = window

  // In the variable below, state is created to hold the user's MetaMask account address.
  const [account, setAccount] = useState("")

  // The function below is used to connect the app to the user's MetaMask account. The address
  // is then stored in state (account). 
  const handleConnect = async () => {
      if(window.ethereum != "undefined"){
          const accounts = await ethereum.request({ method: "eth_requestAccounts"})
          setAccount(accounts[0])
      } else {
          alert("Install Metamask")
      }
  }


  return (
    <div>
        <Header />
        <div className="metamask-connect--wrapper">

            {/* The user clicks the "CONNECT METAMASK" button to connect the app to their MetaMask account. 
            Their account address is then painted to the user-interface */}
            <button className="blue-btn" onClick={handleConnect}>CONNECT METAMASK</button>
            <p className="connection-message">{account && `Connected to: ${account}`}</p>
        </div>

        {/* The user's MetaMask account address is passed to the NewWalletGenerator component via props */}
        <NewWalletGenerator account={account} />
        <UseWallet />
    </div>
  )
}

export default App

