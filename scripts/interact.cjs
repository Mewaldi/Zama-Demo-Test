const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const Counter = await hre.ethers.getContractFactory("ConfidentialCounter");
  const counter = Counter.attach(contractAddress);

  let value = await counter.getCounter();
  console.log("Counter awal:", value.toString());

  const tx = await counter.increment(1); // increment 1
  await tx.wait();

  value = await counter.getCounter();
  console.log("Counter setelah increment:", value.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
