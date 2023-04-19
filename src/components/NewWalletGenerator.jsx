import {useState} from 'react'
import {ethers} from 'ethers'
import {FACTORY_CONTRACT_ABI} from '../FactoryContractABI'
import {FACTORY_CONTRACT_ADDRESS} from '../FactoryContractAddress'


function NewWalletGenerator(props) {

    // This state (newWalletAddress) is where the newly generated wallet account will be stored. 
    const [newWalletAddress, setNewWalletAddress] = useState("")
  
    // This function (createSimpleAccount) calls the "createAccount" function in the SimpleAccountFactory Solidity
    // contract to create a new abstract wallet account (SimpleAccount.sol). 
    const createSimpleAccount = async () => { 
        
        // Salt is required to generate a new SimpleAccount; this variable (randomSalt) generates a random number for salt. 
        const randomSalt = Math.floor(Math.random() * 1000000000000)

        // Ethers.js is used to connect to the Solidity SimpleAccountFactory contract. 
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, FACTORY_CONTRACT_ABI, signer)

        // The new simple wallet account is created via the Factory contract and a transaction receipt is generated.
        // The owner address of the new simple wallet is passed in through "props.account" (which is the MetaMask account)
        const txResponse = await contract.createAccount(props.account, randomSalt)
        const txReceipt = await txResponse.wait()
        console.log(txReceipt)

        // The new wallet account's address is recorded in the state variable "newWalletAddress"
        setNewWalletAddress(txReceipt.events[0].address)
    }
    

    return (
        <div>
            <div className="new-wallet--container">
                <h1 className="new-wallet--title">Generate a New Wallet</h1>

                {/* The "createSimpleAccount" function is called when the user clicks on the "GENERATE" button. */}
                <button className="blue-btn" onClick={createSimpleAccount}>GENERATE</button>

                {/* The new wallet account address is painted to the user-interface. */}
                <p className="new-wallet--address">{newWalletAddress && `Address = ${newWalletAddress}`}</p>
            </div>
        </div>
  )
}

export default NewWalletGenerator

