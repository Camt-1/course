// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract myToken is ERC20 {
    constructor() ERC20(unicode"Camt_Token", "token") {
        _mint(msg.sender, 10000 * 10**18);
    }
}