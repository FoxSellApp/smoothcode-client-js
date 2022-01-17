import {createHmac} from "crypto";

const generateHmac = (secret, baseString, digest='sha256') => {
    return createHmac(digest, secret).update(baseString).digest('hex')
}

export default generateHmac