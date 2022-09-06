// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
    uint256 number;

    function addNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }
}
