
import hre from "hardhat";


const SimpleAccountFactory = await hre.ethers.getContractFactory("SimpleAccountFactory");
const simpleAccountFactory = await SimpleAccountFactory.deploy("0x0576a174D229E3cFA37253523E645A78A0C91B57");

await simpleAccountFactory.deployed();

console.log(`SimpleAccountFactory deployed to ${simpleAccountFactory.address}`);
