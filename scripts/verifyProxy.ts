const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0x19179e713486f9FE2e38DE770242eE4A4a00cf40",
        constructorArguments: [],
        contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});