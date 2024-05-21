"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonSignature = exports.validate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const SHIPDEOSECRET = "U2hpcGRlb0luZG9uZXNpYUpheWFKYXlhSmF5YQ==";
class JsonSignature {
    constructor(payload) {
        const { appType, clientId, clientSecret, exp, iat, } = payload;
        this.appType = appType;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.exp = exp;
        this.iat = iat;
    }
}
exports.JsonSignature = JsonSignature;
/**
 * Validates a JWT signature and checks if the payload contains the expected appType.
 *
 * @param signature - The JWT token to be verified.
 * @param appType - The expected appType value that the payload should contain.
 * @returns The decoded JWT payload if the token is valid and the appType matches, otherwise null.
 *
 * @throws {JsonWebTokenError} If the JWT token is invalid or cannot be verified.
 */
const validate = (signature, appType) => {
    // Verify the JWT token
    const payload = (0, jsonwebtoken_1.verify)(signature, SHIPDEOSECRET);
    // Assuming the payload is an object and appType is a property within the payload
    if (typeof payload === 'object' && payload !== null && 'appType' in payload && payload['appType'] === appType) {
        const data = new JsonSignature(payload);
        return data;
    }
    else {
        throw new Error('Invalid appType');
    }
};
exports.validate = validate;
