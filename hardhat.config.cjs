require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.12",
  networks: {
    mumbai: {
      url: process.env.PROVIDER_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};