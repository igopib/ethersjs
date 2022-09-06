const connectButton = document.getElementById("connectButton");
const incrementNumber = document.getElementById("incrementButton");

connectButton.onclick = connectWallet;
incrementNumber.onclick = incrementNumber;

let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

// Fires up metamask connection
async function connectWallet() {
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  connectButton.innerHTML = "Connected";
}

async function incrementNumber() {
  const numberContractAddress = ""; // Input contract address here.

  const contractAbi = ["function incrementNumber() public "];

  const icoContract = new ethers.Contract(
    numberContractAddress,
    contractAbi,
    provider
  );

  const txResponse = await icoContract.connect(signer).incrementNumber();
  await txResponse.wait();
}
