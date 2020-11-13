const axios = require('axios')

const urlBase = 'https://api-goerli.etherscan.io/api'

async function txlist(apiKey, address) {
    const url = `${urlBase}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
    const response = await axios.get(url)
    return response.data.result
}

async function getTransactionByHash(apiKey, hash) {
    const url = `${urlBase}?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${apiKey}`
    const response = await axios.get(url)
    return response.data.result
}

async function ethAddressToPubKey(apiKey, address) {
    const result = await txlist(apiKey, address)
    const outgoingTx = result.find(tx => tx.from == address)
    const txHash = outgoingTx.hash
    const txData = await getTransactionByHash(apiKey, txHash)
    return txData.publicKey
}

module.exports = ethAddressToPubKey
