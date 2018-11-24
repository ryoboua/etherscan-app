import EtherScan from './ether_scan_api'
import { toHex } from 'web3-utils'

async function fetchAccountData(address) {
    const { result: etherBalance } = await EtherScan.account.balance(address)
    const { result: transactionList } = await EtherScan.account.txlist(address, 1, 'latest', 'desc')

    return { etherBalance, transactionList }
}

async function fetchBlockData(blockNumber) {
    const {result: blockData } = await EtherScan.proxy.eth_getBlockByNumber(toHex(blockNumber))

    return blockData
}

async function fetchTxData(txHash) {
    const { result: txData } = await EtherScan.proxy.eth_getTransactionByHash(txHash)

    return txData
}

export default { fetchAccountData, fetchBlockData, fetchTxData }