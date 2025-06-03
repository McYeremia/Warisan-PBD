const { ethers } = require("hardhat");

async function main() {
  const kontrakAlamat = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [pemberi, notaris] = await ethers.getSigners();

  const Warisan = await ethers.getContractFactory("Warisan");
  const warisan = await Warisan.attach(kontrakAlamat);

  const id = ethers.encodeBytes32String("surat123");

  console.log("Membuka surat...");
  const tx = await warisan.connect(notaris).bukaSurat(id);
  await tx.wait();
  console.log("Surat berhasil dibuka ✅");

  console.log("\nMetadata terbaru:");
  const metadata = await warisan.lihatMetadata(id);
  console.log({
    pemberi: metadata.pemberi,
    notaris: metadata.notaris,
    saksi: metadata.saksi,
    terbuka: metadata.terbuka,
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
