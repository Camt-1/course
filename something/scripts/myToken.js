const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying contract...");

    // 对于外部节点，手动创建一个 signer 对象：
    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const deployer = new ethers.Wallet(privateKey, ethers.provider);
    console.log("Deployer address:", deployer.address);

    // 使用该 signer 创建合约工厂
    const myToken = await ethers.getContractFactory("myToken", deployer);
    console.log("myToken contract factory created.");

    // 部署合约
    const mytoken = await myToken.deploy();
    console.log("Transaction sent. Waiting for deployment...");
    await mytoken.waitForDeployment();

    console.log("myToken contract deployed at:", await myToken.getAddress());
}

main().catch((error) => {
    console.error("Deployment error:", error);
    process.exit(1);
});