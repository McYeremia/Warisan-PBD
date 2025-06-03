const hre = require("hardhat");

async function main() {
  const Warisan = await hre.ethers.getContractFactory("Warisan");
  const warisan = await Warisan.deploy();

  await warisan.deployed();
  console.log(`Warisan deployed to: ${warisan.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
