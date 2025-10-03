// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ConfidentialCounter {
    uint256 private counter;

    constructor() {
        counter = 0;
    }

    function increment(uint256 value) public {
        counter += value;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}

