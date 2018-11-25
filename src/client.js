import EtherScan from './ether_scan_api'
import { toHex } from 'web3-utils'

async function fetchAccountData(address) {
    let { result: etherBalance } = await EtherScan.account.balance(address)
    let { result: transactionList } = await EtherScan.account.txlist(address, 1, 'latest', 'desc')
    
    etherBalance = etherBalance !== null ? etherBalance : 'N/A'
    transactionList = transactionList !== null ? transactionList : 'N/A'

    return { etherBalance , transactionList }
}

async function fetchBlockData(blockNumber) {
    const {result: blockData } = await EtherScan.proxy.eth_getBlockByNumber(toHex(blockNumber))

    return blockData !== null ? blockData : 'N/A'
}

async function fetchTxData(txHash) {
    const { result: txData } = await EtherScan.proxy.eth_getTransactionByHash(txHash)
    return txData !== null ? txData : 'N/A' 
}

export default { fetchAccountData, fetchBlockData, fetchTxData }