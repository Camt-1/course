const { ethers } = require("hardhat");

async function main() {
    const Bank = await ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    await bank.waitForDeployment();

    const address = await bank.getAddress();  // 这里加上 `await`
    console.log("Bank contract deployed at:", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
