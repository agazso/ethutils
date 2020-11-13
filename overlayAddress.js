const { utils } = require("web3");

function overlayAddressFromEthereumAddress(ethAddress, networkId) {
    const overlayAddress = utils.soliditySha3(ethAddress, networkId);
    console.log({ ethAddress, networkId, overlayAddress });
    return overlayAddress
}

module.exports = overlayAddressFromEthereumAddress
