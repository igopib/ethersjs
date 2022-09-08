// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
    uint256 number;
    uint256 private iNumber;

    event Increment(uint256 indexed eNumber);

    function addNumber(uint256 _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint256) {
        return number;
    }

    function incrementNumber() public {
        iNumber++;
        emit Increment(iNumber);
    }

    function getiNumber() public view returns (uint256) {
        return iNumber;
    }

    function resetIncrement() public {
        iNumber = 0;
    }
}
