import Web3 from "web3";
import data from "../build/contracts/Election.json";

export const web3 = new Web3("http://127.0.0.1:7545");

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
const contract = require("@truffle/contract");

const ElectionContract = contract(data);

ElectionContract.setProvider(provider);

export default ElectionContract;

