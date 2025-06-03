# Cara menjalankan

Jalankan Node terlebih dahulu 
```shell
npx hardhat node
```

Lalu Deploy Contractnya
```shell
npx hardhat ignition deploy ignition/modules/Deploy.js --network localhost
```

Catat address dari contract dan masukkan address ke interaksiWarisan.js dan bukaSurat.js


Setelah itu, jalankan interaksiWarisan.js
```shell
npx hardhat run scripts/interaksiWarisan.js --network localhost
``` 

Setelah berhasil maka akan muncul
```shell
Menyimpan surat...
Surat disimpan ✅

//semua address bisa berbeda

Metadata surat:
{
  pemberi: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  notaris: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  saksi: Result(2) [
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC', 
    '0x90F79bf6EB2c4f870365E785982E1f101E93b906'
  ],
  terbuka: false
}
```
Setelah itu, jalankan bukaSurat.js dengan
```shell
npx hardhat run scripts/bukaSurat.js --network localhost
```

maka Outputnya akan memunculkan status terbuka menjadi True

```shell
Membuka surat...
Surat berhasil dibuka ✅

Metadata terbaru:
{
  pemberi: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  notaris: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  saksi: Result(2) [
    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
    '0x90F79bf6EB2c4f870365E785982E1f101E93b906'
  ],
  terbuka: true
}
```
