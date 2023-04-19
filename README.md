# Abstract Wallet Generator App

This React app allows a user to generate an abstract Ethereum wallet account and then use it to send and/or receive ETH. Abstract wallet accounts provide advantages over traditional externally owned wallet accounts (EOA). Specifically, they are more secure and programmable, which gives users greater control over their assets. 

## Description

This app uses two primary Solidity contracts: SimpleAccountFactory.sol, and SimpleAccount.sol; they are both in the reference implementation mentioned in EIP-4337. After downloading  and compiling these contracts (along with some additional interface and import files) from Eth-Infinitism, SimpleAccountFactory.sol was deployed to the Polygon Mumbai testnet using Hardhat. 

The mechanism used is the factory method: if a user wants to create a new abstract wallet account, they must call a function in the SimpleAccountFactory contract, which then deploys a brand new abstract wallet account. A user may create as many new accounts as they wish. 

## Getting Started

### Creating a new abstract wallet account

To run this program, you need to have MetaMask installed (with the Polygon Mumbai testnet network added to it). To get some testnet Matic, go to the following faucet: https://faucet.polygon.technology. To get started using the app to create abstract wallet accounts, go to the following website: https://abstract-wallet-app.netlify.app.

Once you are on the app's website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

```javascript
pragma solidity ^0.8.4;

contract HelloWorld {
    function sayHello() public pure returns (string memory) {
        return "Hello World!";
    }
}

```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "HelloWorld" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the sayHello function. Click on the "HelloWorld" contract in the left-hand sidebar, and then click on the "sayHello" function. Finally, click on the "transact" button to execute the function and retrieve the "Hello World!" message.

## Authors

Metacrafter Chris  
