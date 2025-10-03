import { expect } from "chai";
import pkg from "hardhat";
const { ethers } = pkg;

describe("ConfidentialCounter", function () {
  it("Should increment correctly", async function () {
    const Counter = await ethers.getContractFactory("ConfidentialCounter");
    const counter = await Counter.deploy();
    await counter.waitForDeployment();

    expect(await counter.getCounter()).to.equal(0);

    await counter.increment(5);
    expect(await counter.getCounter()).to.equal(5);

    await counter.increment(3);
    expect(await counter.getCounter()).to.equal(8);
  });
});
