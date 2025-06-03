import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WarisanModule = buildModule("WarisanModule", (m) => {
  const warisan = m.contract("Warisan");
  return { warisan };
});

export default WarisanModule;
