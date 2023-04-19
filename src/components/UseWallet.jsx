import {useState} from 'react'
import {ethers} from 'ethers'
import {SIMPLE_WALLET_ABI} from '../SimpleWalletABI'


function UseWallet() {

    // In the variable below, state is created to hold the wallet's balance.
    const [walletBalance, setWalletBalance] = useState(null)
    
    // In the variables below, state is created to store the user's wallet address,
    // and the address to which the user wishes to send funds.
    const [walletAddress, setWalletAddress] = useState([])
    const [sendAddress, setSendAddress] = useState([])

    // In the variables below, state is created to store the amount of funds to be deposited 
    // to the wallet, as well as the amount of funds to be sent to a recipient.
    const [sendAmount, setSendAmount] = useState(0)
    const [depositAmount, setDepositAmount] = useState(0)
    

    // This function records the user's wallet address (as entered by the user),
    // and stores it to state (walletAddress).
    function handleAddressEntry(event){
        setWalletAddress(event.target.value)
    }

    // This function records the address entered by the user to which they wish to send funds, 
    // and stores it to state (sendAddress).
    function handleSendAddressEntry(event){
        setSendAddress(event.target.value)
    }

    // This function records the amount of funds the user wishes to send (as entered by the user), 
    // and stores it to state (sendAmount).
    function handleSendAmountEntry(event){
        setSendAmount(event.target.value)
    }

    // This function records the amount of funds the user wishes to deposit into their wallet,
    // (as entered by the user), and stores it to state (depositAmount).
    function handleDepositAmountEntry(event){
        setDepositAmount(event.target.value)
    }


    // This function uses Ethers.js to access the user's wallet account and returns the balance by 
    // calling the function "getDeposit". The balance is then stored in state (walletBalance). 
    const getWalletBalance = async () => { 
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(walletAddress, SIMPLE_WALLET_ABI, signer)
        const balance = await contract.getDeposit()
        const adjustedBalance = balance / 1e18
        setWalletBalance(adjustedBalance)
    }

    // This function uses Ethers.js to access the user's wallet account and deposits funds to it by 
    // calling the function "addDeposit". The wallet's balance state is then updated accordingly by 
    // calling the "getWalletBalance" function (to update state). 
    const depositFunds = async () => { 
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(walletAddress, SIMPLE_WALLET_ABI, signer)
        const weiValue = ethers.utils.parseUnits(depositAmount, "ether")
        const txResponse = await contract.addDeposit({value: weiValue})
        const txReceipt = await txResponse.wait()
        console.log(txReceipt)
        getWalletBalance()
    }

    // This function uses Ethers.js to accesses the user's wallet account and transfers funds from it by 
    // calling the function "withdrawDepositTo".
    // Note that only the wallet's owner has access to this function.
    // The wallet's balance state is then updated accordingly by calling the "getWalletBalance" function (to update state). 
    const sendFunds = async () => { 
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(walletAddress, SIMPLE_WALLET_ABI, signer)
        const weiValue = ethers.utils.parseUnits(sendAmount, "ether")
        const txResponse = await contract.withdrawDepositTo(sendAddress, weiValue)
        const txReceipt = await txResponse.wait()
        console.log(txReceipt)
        getWalletBalance()
    }


    return (
        <div>
            <div className="use-wallet--container">
                <h1 className="use-wallet--title">Use Wallet</h1>

                {/* The user inputs their wallet address and it is captured dynamically in state (walletAddress) */}
                <input 
                    type="text"
                    className="address-input" 
                    placeholder="Enter wallet address"
                    name="walletAddress"
                    value={walletAddress}
                    onChange={handleAddressEntry} 
                />

                {/* The user clicks the "GETBALANCE" button to call the "getWalletBalance" function. Their wallet balance is 
                then painted to the user-interface */}
                <button className="blue-btn" onClick={getWalletBalance}>GET BALANCE</button>
                <p className="wallet-balance">{walletBalance != null ? `Wallet Balance = ${walletBalance} MATIC` : ""}</p>

                <div className="divider"></div>

                <h2 className="deposit-funds--title">Deposit Funds</h2>

                {/* The user inputs the amount of funds they would like to deposit into their wallet and it is captured 
                dynamically in state (depositAmount) */}           
                <label className="deposit-label" >Enter amount of MATIC to deposit:</label>
                <input 
                    type="number"
                    step="any"
                    className="number-input" 
                    name="depositAmount"
                    value={depositAmount}
                    onChange={handleDepositAmountEntry} 
                />

                {/* The user clicks the "DEPOSIT" button to call the "depositFunds" function. The amound of funds they entered
                into "depositAmount" is then deposited into their wallet account.*/}
                <button className="blue-btn" onClick={depositFunds}>DEPOSIT</button>

                <div className="divider"></div>

                <h2 className="send-funds--title">Send Funds</h2>

                {/* The user inputs the amount of funds they would like to send to another wallet and it is captured 
                dynamically in state (sendAmount) */}   
                <label className="send-label" >Enter amount of MATIC to send:</label>
                <input 
                    type="number"
                    step="any"
                    className="number-input" 
                    name="sendAmount"
                    value={sendAmount}
                    onChange={handleSendAmountEntry} 
                />

                {/* The user inputs the address to which they would like to send funds and it is captured dynamically 
                in state (sendAddress) */}  
                <input 
                    type="text"
                    className="address-input recipient" 
                    placeholder="Enter recipient address"
                    name="sendAddress"
                    value={sendAddress}
                    onChange={handleSendAddressEntry} 
                />

                {/* The user clicks the "SEND" button to call the "sendFunds" function. The amound of funds they entered
                into "sendAmount" is then transferred to the address they entered into "sendAddress".*/}
                <button className="blue-btn" onClick={sendFunds}>SEND</button>
            </div>
        </div>
    )
}

export default UseWallet


