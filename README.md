# Abstract Wallet Generator App

This React app allows a user to generate an abstract wallet account and then use it to send and/or receive MATIC. Abstract wallet accounts provide advantages over traditional externally owned wallet accounts (EOA). Specifically, they are more secure and programmable, which gives users greater control over their assets. 

## Description

This app uses two primary Solidity contracts: SimpleAccountFactory.sol, and SimpleAccount.sol; they are both in the reference implementation mentioned in EIP-4337. After downloading  and compiling these contracts (along with some additional interface and import files) from Eth-Infinitism, SimpleAccountFactory.sol was deployed to the Polygon Mumbai testnet using Hardhat. 

The mechanism used is the factory method: if a user wants to create a new abstract wallet account, they must call a function in the SimpleAccountFactory contract, which then deploys a brand new abstract wallet account on the Mumbai testnet. A user may create as many new accounts as they wish. 

## Getting Started

### Creating a new abstract wallet account

To run this program, it is required to have MetaMask installed (with the Polygon Mumbai testnet network added to it). To get some testnet MATIC, go to the following faucet: https://faucet.polygon.technology. To get started using the app to create abstract wallet accounts, go to the following website: https://abstract-wallet-app.netlify.app.

Once you are on the app's website, connect to MetaMask by clicking on the "Connect MetaMask" button. Your account address should appear in red text under the button. Next, to create a new abstract wallet account, click on the "Generate" button in the "Generate a New Wallet" section. MetaMask will then pop up for you to approve this transaction (you will need some Mumbai testnet MATIC to do this). After deployment to the Mumbai network, your new abstract wallet account address will appear in red text under the "Generate" button. 

Copy your new wallet's address and save it somewhere. 

### Using your wallet


To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.



## Authors

Metacrafter Chris  
