import etherScanApi from 'etherscan-api'

export default etherScanApi.init(
    process.env.REACT_APP_API_KEY,
    process.env.REACT_APP_CHAIN,
    process.env.REACT_APP_API_TIMEOUT,
)