import etherScanApi from "etherscan-api"
const api = etherScanApi.init(
  process.env.REACT_APP_API_KEY,
  process.env.REACT_APP_CHAIN,
  process.env.REACT_APP_API_TIMEOUT
)

function getTxListPerPage(address, page = 1, offset = 20) {
  return fetch(
    `https://api.etherscan.io/api?
module=account&
action=txlist&
address=${address}&
startblock=0&
endblock=latest&
page=${page}&
offset=${offset}&
sort=desc&
apikey=${process.env.REACT_APP_API_KEY}`
  ).then(res => res.json())
}

api.account.getTxListPerPage = getTxListPerPage

export default api
