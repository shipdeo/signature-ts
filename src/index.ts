import { verify } from 'jsonwebtoken';
const SHIPDEOSECRET = "U2hpcGRlb0luZG9uZXNpYUpheWFKYXlhSmF5YQ==";
class JsonSignature {
    appType: string;
    clientId: string;
    clientSecret: string;
    exp: number;
    iat: number;

    constructor(payload: any) {
        const {
            appType,
            clientId,
            clientSecret,
            exp,
            iat,
        } = payload;

        this.appType = appType;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.exp = exp;
        this.iat = iat;
    }
} 

/**
 * Validates a JWT signature and checks if the payload contains the expected appType.
 *
 * @param signature - The JWT token to be verified.
 * @param appType - The expected appType value that the payload should contain.
 * @returns The decoded JWT payload if the token is valid and the appType matches, otherwise null.
 *
 * @throws {JsonWebTokenError} If the JWT token is invalid or cannot be verified.
 */
const validate = (signature: string, appType: string): JsonSignature => {
    // Verify the JWT token
    const payload = verify(signature, SHIPDEOSECRET);

    // Assuming the payload is an object and appType is a property within the payload
    if (typeof payload === 'object' && payload !== null && 'appType' in payload && payload['appType'] === appType) {
        const data = new JsonSignature(payload);
        return data;
    } else {
        throw new Error('Invalid appType');
    }
}

export {
    validate,
    JsonSignature
}