const crypto = require('crypto')


const generateHmac = (secret, baseString, digest='sha256') => {
    return crypto.createHmac(digest, secret).update(baseString).digest('hex')
}

module.exports = generateHmac
