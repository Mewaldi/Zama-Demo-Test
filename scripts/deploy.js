import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const Counter = await ethers.getContractFactory("ConfidentialCounter");
  const counter = await Counter.deploy();
  await counter.deployed();

  console.log("Counter deployed to:", counter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
