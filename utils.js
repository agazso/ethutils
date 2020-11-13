
function stripHexPrefix(hex) {
  if (hex.startsWith('0x')) return hex.substr(2)
  return hex
}

exports.stripHexPrefix = stripHexPrefix
