declare class JsonSignature {
    appType: string;
    clientId: string;
    clientSecret: string;
    exp: number;
    iat: number;
    constructor(payload: any);
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
declare const validate: (signature: string, appType: string) => JsonSignature;
export { validate, JsonSignature };
