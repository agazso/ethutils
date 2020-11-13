const createKeccakHash = require('keccak')
const {stripHexPrefix} = require('./utils')

function overlayAddressFromEthereumAddress(ethAddress, networkId) {
  const overlayAddress = createKeccakHash('sha3-256')
    .update(Buffer.from(`${stripHexPrefix(ethAddress)}${stripHexPrefix(networkId)}`, 'hex'))
    .digest('hex')
  return overlayAddress
}

module.exports = overlayAddressFromEthereumAddress
