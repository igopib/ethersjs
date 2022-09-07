let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

// Fires up metamask connection
async function connectWallet() {
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  connectButton.innerHTML = "Connected";
}

async function incrementNumber() {
  const numberContractAddress = "0xFD8a264E71d3513735A07b6AFf1BDD2451A9d64B"; // Input contract address here.

  const contractAbi = ["function incrementNumber() public "];

  const icoContract = new ethers.Contract(
    numberContractAddress,
    contractAbi,
    provider
  );

  const txResponse = await icoContract.connect(signer).incrementNumber();
  await txResponse.wait();
}
