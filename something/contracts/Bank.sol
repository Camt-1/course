// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Bank {
    address public owner;
    mapping(address => uint256) public deposits;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    receive() external payable {
        deposits[msg.sender] += msg.value;
    }

    function balance() public view returns(uint256) {
        return deposits[msg.sender];
    }

    function withdraw() public {
        (bool success, ) = msg.sender.call{value: deposits[msg.sender]}(new bytes(0));
        require(success, "transfer faild!");

        deposits[msg.sender] = 0;
    }   
}