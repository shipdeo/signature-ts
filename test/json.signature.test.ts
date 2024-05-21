import { JsonSignature } from '../src/index';

const PAYLOADFAKE = {
    appType: 'myApp',
    clientId: 'myClientId',
    clientSecret: 'mySecret',
    exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour from now
    iat: Math.floor(Date.now() / 1000) // Current time
  };


describe('JsonSignature', () => {

    it('should initialize properties from payload', () => {
      const mySignature = new JsonSignature(PAYLOADFAKE);
      expect(mySignature.appType).toBe(PAYLOADFAKE.appType);
      expect(mySignature.clientId).toBe(PAYLOADFAKE.clientId);
      expect(mySignature.clientSecret).toBe(PAYLOADFAKE.clientSecret);
      expect(mySignature.exp).toBe(PAYLOADFAKE.exp);
      expect(mySignature.iat).toBe(PAYLOADFAKE.iat);
    });
})