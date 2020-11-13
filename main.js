const ethAddressToPubKey = require('./ethAddressToPubKey')
const overlayAddressFromEthereumAddress = require('./overlayAddress')

const apiKey = require('./apiKey')
const address = '0xb27e3af4eb6e40007b5f74a635b9d5fb6c4887ec'
const beeNetworkId = `0x0100000000000000`;

async function main() {
    const publicKey = await ethAddressToPubKey(apiKey, address)
    const overlayAddress = overlayAddressFromEthereumAddress(address, beeNetworkId)
    console.debug({address, publicKey, overlayAddress})
}

main()
