const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying contract...");

    // 对于外部节点，手动创建一个 signer 对象：
    const privateKey = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
    const deployer = new ethers.Wallet(privateKey, ethers.provider);
    console.log("Deployer address:", deployer.address);

    // 使用该 signer 创建合约工厂
    const Bank = await ethers.getContractFactory("Bank", deployer);
    console.log("Bank contract factory created.");

    // 部署合约
    const bank = await Bank.deploy();
    console.log("Transaction sent. Waiting for deployment...");
    await bank.waitForDeployment();

    console.log("Bank contract deployed at:", await bank.getAddress());
}

main().catch((error) => {
    console.error("Deployment error:", error);
    process.exit(1);
});
