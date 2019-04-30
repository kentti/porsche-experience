import { Buffer } from 'buffer';
import jwt from 'jsonwebtoken';
import uuid from 'react-native-uuid';

import { hmRestApiConfig } from '../constants';

const generateJwt = () => {
  const payload = {
    api_version: hmRestApiConfig.version,
    app_id: hmRestApiConfig.app_id,
    aud: hmRestApiConfig.app_uri,
    iss: hmRestApiConfig.private_key_id,
    iat: Math.round(Date.now() / 1000),
    jti: uuid.v1(),
    access_token: 'b55af95a-607c-47e8-ad37-5016a8beda61',
  };
  
  const privateKey = Buffer.from(hmRestApiConfig.private_key, 'utf8')
  return jwt.sign(payload, privateKey, { algorithm: 'ES256' });
}

export { generateJwt };