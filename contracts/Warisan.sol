// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Warisan {
    struct Metadata {
        address pemberi;
        address notaris;
        address[] saksi;
        string ipfsHash;
        bool terbuka;
    }

    mapping(bytes32 => Metadata) public surat;

    function simpanSurat(
        bytes32 id,
        address notaris,
        address[] memory saksi,
        string memory ipfsHash
    ) public {
        require(surat[id].pemberi == address(0), "Surat sudah ada");
        surat[id] = Metadata(msg.sender, notaris, saksi, ipfsHash, false);
    }

    function bukaSurat(bytes32 id) public {
        require(msg.sender == surat[id].notaris, "Hanya notaris yang bisa membuka");
        surat[id].terbuka = true;
    }

    function lihatMetadata(bytes32 id) public view returns (
        address pemberi, address notaris, address[] memory saksi, bool terbuka
    ) {
        Metadata storage meta = surat[id];
        return (meta.pemberi, meta.notaris, meta.saksi, meta.terbuka);
    }
}
