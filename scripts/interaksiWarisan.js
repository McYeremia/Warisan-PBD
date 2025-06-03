const { ethers } = require("hardhat"); // GUNAKAN ethers dari Hardhat

async function main() {
    const kontrakAlamat = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const [pemberi, notaris, saksi1, saksi2] = await ethers.getSigners();

    const Warisan = await ethers.getContractFactory("Warisan");
    const warisan = await Warisan.attach(kontrakAlamat);

    const id = ethers.encodeBytes32String("surat123");
    const saksiArray = [saksi1.address, saksi2.address];

    console.log("Menyimpan surat...");
    const tx = await warisan.connect(pemberi).simpanSurat(
        id,
        notaris.address,
        saksiArray,
        "ipfs://hashcontoh"
    );
    await tx.wait();
    console.log("Surat disimpan ✅");

    console.log("\nMetadata surat:");
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
