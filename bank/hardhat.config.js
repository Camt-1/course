require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localdev: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      // accounts 字段在这种情况下不会自动注入到 ethers.getSigners()，需要手动使用私钥
      accounts: ["0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"]
    }
  }
};
