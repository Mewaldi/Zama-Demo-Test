let provider, signer, contract;

// change with contact addres after deploy
const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";
const ABI = [
  "function increment(uint256 value) public",
  "function getCounter() public view returns (uint256)"
];

document.getElementById("connectBtn").onclick = async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    alert("Wallet connected!");
  } else {
    alert("Install MetaMask");
  }
};

document.getElementById("incrementBtn").onclick = async () => {
  if (!contract) return alert("Connect wallet dulu!");
  const tx = await contract.increment(1);
  await tx.wait();
  alert("Counter incremented!");
};

document.getElementById("getCounterBtn").onclick = async () => {
  if (!contract) return alert("Connect wallet!");
  const value = await contract.getCounter();
  document.getElementById("output").innerText = "Counter value: " + value.toString();
};
