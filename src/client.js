import EtherScan from "./ether_scan_api"
import { toHex } from "web3-utils"

async function fetchAccountData(address) {
  const etherBalance = await EtherScan.account
    .balance(address)
    .then(handleResponse)
    .catch(handleErrors)
  const transactionList = await fetchAccountTransactionList(address)
  const totalTransactionCount = await fetchTotalTransactionCount(address)

  return {
    etherBalance,
    transactionList,
    totalTransactionCount
  }
}

async function fetchBlockData(blockNumber) {
  const blockData = await EtherScan.proxy
    .eth_getBlockByNumber(toHex(blockNumber))
    .then(handleResponse)
    .catch(handleErrors)
  return blockData
}

async function fetchTxData(txHash) {
  const txData = await EtherScan.proxy
    .eth_getTransactionByHash(txHash)
    .then(handleResponse)
    .catch(handleErrors)
  return txData
}

async function fetchAccountTransactionList(address, page = 1) {
  const transactionList = await EtherScan.account
    .getTxListPerPage(address, page)
    .then(handleResponse)
    .catch(handleErrors)
  return transactionList
}

async function fetchTotalTransactionCount(address) {
  const totalTransactionCount = await EtherScan.proxy
    .eth_getTransactionCount(address)
    .then(handleResponse)
    .catch(handleErrors)
  return totalTransactionCount
}

function handleResponse(res) {
  if (res.result === null || res.result === undefined) {
    return "N/A"
  } else {
    return res.result
  }
}

function handleErrors(res) {
  return "N/A"
}

export default {
  fetchAccountData,
  fetchBlockData,
  fetchTxData,
  fetchAccountTransactionList,
}
